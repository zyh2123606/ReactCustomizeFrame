const merge = require('webpack-merge')
const webpack = require('webpack')
const { resolve } = require('path')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.config.common.js')
require('dotenv').config()

module.exports = merge(common, {
    devServer: {
        compress: true, 
        historyApiFallback: true,
        disableHostCheck: true,
        contentBase: process.env.CONTENTBASE,
        inline: true, //打包后加入一个websocket客户端
        hot: true, //热加载
        port: 88,
        host: '0.0.0.0',
        stats: 'normal',
        proxy: {
            '/api': {
                target: 'http://app.t.mochentech.com/',
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        }
    },
    entry: [
        '@babel/polyfill',
        path.resolve(__dirname, process.env.PRODUCT + '/app.js')
    ],
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 500,
        poll: 1000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), //用户名替代id
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, process.env.PRODUCT + '/index.ejs'),
            hash: true,
            showErrors: true,
            preFix: '//app.t.mochentech.com/api/vc'
        })
    ]
})