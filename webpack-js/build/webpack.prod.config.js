// 开发环境
const { resolve } = require('path')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const { name } = require('../package.json')
const webpackConfig = require('./webpack.config.js')

module.exports = merge(webpackConfig, {
  mode: 'production',
  target: ['web', 'es5'],
  entry: { // 入口
    umd: {
      import: './src/index.ts',
      library: {
        name: 'LuckyCanvas',
        type: 'umd',
        umdNamedDefine: true
      }
    },
    'umd.min': {
      import: './src/index.ts',
      library: {
        name: 'LuckyCanvas',
        type: 'umd',
        umdNamedDefine: true
      }
    },
    cjs: {
      import: './src/index.ts',
      library: {
        type: 'commonjs2'
      }
    },
    'cjs.min': {
      import: './src/index.ts',
      library: {
        type: 'commonjs2'
      }
    }
  },
  output: { // 出口
    path: resolve(__dirname, '../dist'),
    filename: `${name}.[name].js`, // 导出文件名
    libraryTarget: 'umd', // 全局通用模块
    globalObject: 'self', // web使用self
    clean: true // 清理dist目录
  },
  optimization: { // 优化项
    minimize: true, // 启用压缩
    minimizer: [
      new TerserPlugin({ // 压缩js
        include: /min/ // 匹配min的入口
      })
    ]
  }
})
