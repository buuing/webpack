const { resolve } = require('path')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts|js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: { // 模块加载路径别名
      '@': resolve(__dirname, '../src')
    },
    extensions: ['.ts', '.js'] // 省略后缀
  },
  devtool: 'source-map',
  plugins: [
    new ESLintWebpackPlugin({
      fix: true // 自动解决普通格式问题
    })
  ]
}
