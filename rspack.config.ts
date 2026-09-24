import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { HtmlRspackPlugin, DefinePlugin, sources, type Compiler } from '@rspack/core'
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
    cssFilename: isDev ? '[name].css' : '[name].[contenthash:8].css',
    cssChunkFilename: isDev ? '[name].css' : '[name].[contenthash:8].css',
    assetModuleFilename:'assets/[name].[hash:8][ext][query]',
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
    // Emit 404.html to dist so GitHub Pages serves it for unknown routes.
    // Not using CopyRspackPlugin: its glob walked the whole project (incl. node_modules) and added ~15s per build.
    {
      apply(compiler: Compiler) {
        const file = path.resolve(__dirname, '404.html')
        compiler.hooks.thisCompilation.tap('Emit404Plugin', (compilation) => {
          compilation.hooks.processAssets.tap('Emit404Plugin', () => {
            compilation.fileDependencies.add(file)
            compilation.emitAsset('404.html', new sources.RawSource(fs.readFileSync(file)))
          })
        })
      },
    },
    ...(isDev ? [new ReactRefreshRspackPlugin()] : []),
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
      // Rspack's built-in CSS support: extracts .css files in production and hot-reloads in dev.
      // Replaces style-loader/css-loader/postcss-loader, which pulled webpack and js-yaml (with audit issues) into the tree.
      {
        test: /\.css$/,
        type: 'css',
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
