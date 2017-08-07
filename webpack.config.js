/**
 * Created by lenovo on 2017/8/5.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var resolve = function(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    entry: './src/index',
    output: {
        filename: 'index.js',
        path: resolve('./dist')
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', include: resolve('./src'), exclude: resolve('./node_modules')}
        ]
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('./index.html'),
            inject: true
        })
    ]
}