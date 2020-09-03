const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")
module.exports = {
    entry: {
        main: './src/index.js'
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        hot: true,
        // hotOnly: true,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: [
                    "babel-preset-env", {
                        useBuiltIns: "usage"
                    }
                ]
            }
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html")
        })
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "./dist")
    }
}