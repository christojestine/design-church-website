import path from 'path'
import { fileURLToPath } from 'url'
import { HtmlRspackPlugin, DefinePlugin } from '@rspack/core'

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
  devtool: isDev ? 'cheap-module-source-map' : false,
  resolve: {
    alias: {
      '@': srcPath,
      'figma:asset': assetsPath,
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
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
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
                  refresh: false,
                },
              },
              keepClassNames: true,
              target: 'es2020',
            },
            minify: !isDev,
            sourceMaps: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: false,
            },
          },
          'postcss-loader',
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
  optimization: {
    moduleIds: 'deterministic',
    usedExports: true,
  },
}

export default config