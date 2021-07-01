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
