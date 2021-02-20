const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const webpack = require('webpack');
const portfinder = require('portfinder');
const DashboardPlugin = require('webpack-dashboard/plugin');

const config = require('./config');
const getClientEnvironment = require('./env');

const baseWebpackConfig = require('./webpack.base');
const env = getClientEnvironment(config.publicPath);

const devWebpackConfig = merge.smart(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].js',
    publicPath: config.publicPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.indexPath,
      minify: {
        html5: true
      },
      hash: false
    }),
    new DashboardPlugin(),
    new InterpolateHtmlPlugin(env.raw),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    ...config.devServer
  },
  stats: {
    colors: true,
    children: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    builtAt: false,
    entrypoints: false,
    assets: false,
    version: false
  }
});

module.exports = new Promise((resolve, reject) => {
  // 搜寻可用的端口号
  portfinder.basePort = config.devServer.port;
  portfinder.getPort((err, port) => {
    if (err) reject(err)
    else {
      devWebpackConfig.devServer.port = port;
    }
    resolve(devWebpackConfig)
  })
});
