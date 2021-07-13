// 开发环境
const path = require('path')
const { merge }  = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.js')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    open: true,
    port: '8138',
    liveReload: true, // 热更新
    contentBase: path.resolve(__dirname, '../dist'), // 静态资源指向路径
    compress: true, // 启用gzip压缩
  }
})

module.exports = webpackConfig
