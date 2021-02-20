const path = require('path');
const argv = require('yargs').argv;
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


//传入自定义配置
const config = require('./config');
const REACT_APP_PATH = path.resolve(__dirname, '../src');
const getClientEnvironment = require('./env');
const bundleAnalyzerReport = argv.report;
const env = getClientEnvironment(config.publicPath);


const webpackConfig = {
  plugins: []
};
if (bundleAnalyzerReport) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerPort: 8081,
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: path.join(config.assetsRoot, './report.html')
  }));
}

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-source-map',
  entry: {
    app: './src/index.tsx',
    vendor: ['react', 'react-dom'] // 不变的代码分包
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: config.assetsRoot,
    publicPath: config.publicPath
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: [REACT_APP_PATH],
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          emitError: true,
          fix: true // 是否自动修复
        }
      },
      {
        oneOf: [
          {
            test: /\.(html)$/,
            loader: 'html-loader'
          },
          {
            test: /\.(j|t)sx?$/,
            include: REACT_APP_PATH,
            use: [
              {
                loader: 'thread-loader',
                options: {
                  // there should be 1 cpu for the fork-ts-checker-webpack-plugin
                  workers: require('os').cpus().length - 1,
                  poolTimeout: Infinity // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
                },
              },
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    '@babel/preset-react',
                    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 2 }]
                  ],
                  plugins: [
                    '@babel/plugin-syntax-dynamic-import',
                    ['@babel/plugin-proposal-class-properties', { 'loose': true }]
                  ],
                  cacheDirectory: true // 加快编译速度
                }
              },
              { loader: 'cache-loader' },
              {
                loader: 'thread-loader',
                options: {
                  // there should be 1 cpu for the fork-ts-checker-webpack-plugin
                  workers: require('os').cpus().length - 1,
                  poolTimeout: Infinity // set this to Infinity in watch mode - see https://github.com/webpack-contrib/thread-loader
                },
              },
              {
                loader: 'ts-loader',
                options: {
                  happyPackMode: true // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
                }
              }
            ]
          },
          {
            test: /\.(less|css)$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules: false
                }
              },
              'postcss-loader',
              {
                loader: 'less-loader',
                options: { javascriptEnabled: true }
              }
            ]
          },
          {
            test: /\.svg$/,
            use: ['@svgr/webpack']
          },
          {
            test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: 'img/[name].[hash:8].[ext]',
              outputPath: config.assetsDirectory,
              publicPath: config.assetsRoot
            }
          },
          {
            exclude: [/\.(js|mjs|ts|tsx|less|css|jsx)$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'media/[path][name].[hash:8].[ext]',
              outputPath: config.assetsDirectory,
              publicPath: config.assetsRoot
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    mainFiles: ['index'],
    mainFields: ['browser', 'module', 'main'],
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      'react-dom': '@hot-loader/react-dom',
      'components': path.resolve(__dirname, '../src/components'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'hooks': path.resolve(__dirname, '../src/hooks'),
      'types': path.resolve(__dirname, '../src/types'),
    }
  },
  plugins: [
    // 清理打包目录
    new CleanWebpackPlugin(),
    new HardSourceWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: config.indexPath,
      showErrors: true
    }),
    new InterpolateHtmlPlugin(env.raw),
    new webpack.DefinePlugin(env.stringified),
    new CopyWebpackPlugin([
      {
        from: 'public',
        ignore: ['index.html']
      }
    ])
  ],
  optimization: {}
});
