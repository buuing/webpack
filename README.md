# webpack

## es6+ 转 es5

```shell
npm i babel-loader @babel/core @babel/preset-env -D
```

配置loader

```js
{
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                [
                    '@babel/prset-env',
                    {
                        useBuiltIns: 'usage', // 按需加载
                        corejs: 3, // corejs的版本
                        targets: 'defaults',
                        // targets: {
                        //     chrome: '58',
                        //     ie: '9',
                        //     firefox: '60',
                        //     safari: '10',
                        //     edge: '17'
                        // },
                    }
                ]
            ]
        }
    }
}
```

但是`preset-env`只能转换基本语法

`@babel/polyfill`可以转换所有js新语法

```shell
npm i @babel/polyfill -D
```

然后在入口文件里通过import来引入刚刚下载的polyfill(不推荐), 但是全部引入会导致打包文件非常大, 这时候就需要`core-js`来进行按需引入

```shell
npm i core-js -D
```

## 校验js代码格式

```shell
npm i eslint eslint-config-airbnb-base eslint-webpack-plugin eslint-plugin-import -D
```

- `eslint` 校验js代码的工具
- `eslint-config-airbnb-base` 最流行的js代码格式规范
- `eslint-webpack-plugin` webpack的eslint插件
- `eslint-plugin-import` 用于在package.json里面读取eslintConfig的配置项

```js
const ESLintPlugin = require('eslint-webpack-plugin')

{
    ...
    plugins: [
        new ESLintPlugin({
            fix: true
        })
    ]
    ...
}
```

eslintConfig

```json
...
    "eslintConfig": {
        "extends": "airbnb-base"
    }
...
```

## devServer

```shell
npm i webpack-dev-server -D
```

```js
target: 'web', // 告诉webpack是web相关的项目
devServer: {
    contentBase: './dist', // 静态资源目录
    compress: true, // 启用gzip压缩
    port: 1234, // 端口号
    liveReload: true, // 热更新
}
```

### devServer热更新配置

webpack4.x 是设置`hot: true`

但是在 webpack5.x 里面改成了`liveReload: true`, 并且要禁用掉`hot`属性

webpack5.x 认为, 热更新只适用于web相关的项目, 所以想要实现热更新的效果, 还需要在devServer的外边加上`target: 'web'`

### devServer热更新启动

webpack4.x 是通过`webpack-dev-server`来启动

webpack5.x 是通过`webpack serve`来启动
