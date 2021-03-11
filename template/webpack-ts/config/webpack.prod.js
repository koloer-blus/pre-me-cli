const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const EsBuildPlugin = require('esbuild-webpack-plugin').default;

const config = require('./config');
const baseWebpackConfig = require('./webpack.base');
const getClientEnvironment = require('./env');

const productionGzipExtensions = ['js', 'css'];
const sourceMapsMode = config.productionJsSourceMap ? 'source-map' : 'none';
const env = getClientEnvironment(config.publicPath);

module.exports = merge.smart(baseWebpackConfig, {
  mode: 'production',
  devtool: sourceMapsMode,
  output: {
    filename: 'js/[name].[contenthash:8].js',
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(less|css)$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
              },
              'postcss-loader',
              {
                loader: 'less-loader',
                options: {
                  javascriptEnabled: true,
                }
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
              name: 'img/[name].[contenthash:8].[ext]',
              outputPath: config.assetsDirectory,
              publicPath: config.assetsRoot
            }
          },
          {
            exclude: [/\.(js|mjs|ts|tsx|less|css|jsx)$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: 'media/[path][name].[contenthash:8].[ext]',
              outputPath: config.assetsDirectory,
              publicPath: config.assetsRoot
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        return 'script';
      },
      include: ['app']
    }),
    // 处理html
    new HtmlWebpackPlugin({
      template: config.indexPath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeOptionalTags: false,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeAttributeQuotes: true,
        removeCommentsFromCDATA: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }),
    new InterpolateHtmlPlugin(env.raw),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
      // chunkFilename: '[name].[contenthash:8].chunk.css'
    }),
    new NyanProgressPlugin({
      // 获取进度的时间间隔，默认 180 ms
      debounceInterval: 60,
      nyanCatSays(progress, messages) {
        try {
          if (progress === 1) {
            // 当构建完成时，喊出「呦，又在写 Bug 了？」
            return '不错嘛，成功啦！🎉'
          } else {
            return '加速加速～🚗'
          }
        } catch (error) {
          return `完蛋玩意，有BUG🐛\n${messages}`
        }
      }
    }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
  entry: {
    app: './src/index.tsx'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      maxInitialRequests: 5,
      cacheGroups: {
        // 提取公共模块
        commons: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          name: 'common'
        }
      }
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: true ? { map: { inline: false } } : {}
      }),
      new TerserPlugin({
        sourceMap: config.productionJsSourceMap
      }),
      new EsBuildPlugin({
        // optimize: true,
        target: 'chrome49',
      }),
    ],
  }
});
