// 开发环境
const { merge }  = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.js')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
})

module.exports = webpackConfig
