const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js', // 入口
  output: { // 出口
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js', // 导出文件名
    library: 'LuckyCanvas', // 库的名称
    libraryTarget: 'umd', // 全局通用模块
    globalObject: 'self', // web使用self
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                    useBuiltIns: 'usage', // 按需加载
                    corejs: 3, // corejs的版本
                    targets: 'defaults', // 浏览器版本兼容
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'head', // 插入到head标签中
      scriptLoading: 'blocking', // 不使用defer属性
    })
  ],
}
