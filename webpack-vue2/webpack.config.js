const { resolve } = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'vue-demo.js',
    library: 'vue-demo',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'self' // web使用self
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  target: 'web',
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8888,
    liveReload: true, // 热更新
    contentBase: resolve(__dirname, './dist'), // 静态资源指向路径
    compress: true // 启用gzip压缩
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html', // 我们要使用的 html 模板地址
      filename: 'index.html', // 打包后输出的文件名
      scriptLoading: 'blocking' // 不使用defer属性
    })
  ]
}