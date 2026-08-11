import path from 'path'
import { fileURLToPath } from 'url'
import { HtmlRspackPlugin, DefinePlugin, CopyRspackPlugin, CssExtractRspackPlugin } from '@rspack/core'
import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcPath = path.resolve(__dirname, 'src')
const assetsPath = path.resolve(__dirname, 'src/app/assets')
const isDev = process.env.NODE_ENV !== 'production'
const isProd = process.env.NODE_ENV === 'production'

const config = {
  entry: path.resolve(srcPath, 'main.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? '[name].js' : '[name].[contenthash:8].js',
    chunkFilename: isDev ? '[name].js' : '[name].[contenthash:8].js',
    publicPath: isProd ? '/design-church-website/' : '/',
    assetModuleFilename: 'assets/[name].[hash:8][ext][query]',
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval' : false,
  experiments: {
    incremental: isDev,
  },
  resolve: {
    alias: {
      '@': srcPath,
      'figma:asset': assetsPath,
      // Use pre-built pre-minified ESM bundle — avoids parsing 300+ source files
      'three$': path.resolve(__dirname, 'node_modules/three/build/three.module.min.js'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    fullySpecified: false,
  },
  plugins: [
    new HtmlRspackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      // Ensure dev server and build include the root favicon.ico
      favicon: path.resolve(__dirname, 'favicon.ico'),
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
      '__REACT_DEVTOOLS_GLOBAL_HOOK__': '(typeof window !== "undefined" ? window.__REACT_DEVTOOLS_GLOBAL_HOOK__ : undefined)',
    }),
    // Copy 404.html to dist so GitHub Pages serves it for unknown routes
    new CopyRspackPlugin({
      patterns: [{ from: path.resolve(__dirname, '404.html'), to: '404.html' }],
    }),
    ...(isDev ? [new ReactRefreshRspackPlugin()] : []),
    ...(isProd ? [new CssExtractRspackPlugin({ filename: '[name].[contenthash:8].css', chunkFilename: '[name].[contenthash:8].css' })] : []),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
                decorators: true,
                dynamicImport: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                  development: isDev,
                  refresh: isDev,
                },
              },
              keepClassNames: true,
              target: 'es2020',
            },
            sourceMaps: false,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          isProd ? CssExtractRspackPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 0,
              modules: false,
            },
          },
          ...(isProd ? ['postcss-loader'] : []),
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.(png|jpe?g|gif|webp|avif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.csv$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    port: 5173,
    historyApiFallback: true,
    hot: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    headers: {
      'Cache-Control': 'no-store',
    },
    setupMiddlewares(middlewares: any, devServer: any) {
      // Ensure favicon is served with correct content-type and avoid injecting CSP header
      devServer.app.use((req: any, res: any, next: any) => {
        if (req.url && req.url.endsWith('.ico')) {
          res.setHeader('Content-Type', 'image/x-icon')
        }
        const originalSetHeader = res.setHeader.bind(res)
        res.setHeader = (name: string, value: any) => {
          if (name.toLowerCase() === 'content-security-policy') {
            return res
          }
          return originalSetHeader(name, value)
        }
        next()
      })
      return middlewares
    },
  },
  target: 'web',
  optimization: isDev ? {
    minimize: false,
    moduleIds: 'named',
    chunkIds: 'named',
    usedExports: false,
    providedExports: false,
    innerGraph: false,
    runtimeChunk: false,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  } : {
    minimize: true,
    moduleIds: 'deterministic',
    chunkIds: 'deterministic',
    usedExports: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router)[\\/]/,
          name: 'vendor-react',
          chunks: 'all',
          priority: 30,
        },
        mui: {
          test: /[\\/]node_modules[\\/](@mui|@emotion)[\\/]/,
          name: 'vendor-mui',
          chunks: 'all',
          priority: 20,
        },
        swiper: {
          test: /[\\/]node_modules[\\/]swiper[\\/]/,
          name: 'vendor-swiper',
          chunks: 'all',
          priority: 15,
        },
        motion: {
          test: /[\\/]node_modules[\\/]motion[\\/]/,
          name: 'vendor-motion',
          chunks: 'all',
          priority: 10,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: -10,
        },
      },
    },
  },
}

export default config
