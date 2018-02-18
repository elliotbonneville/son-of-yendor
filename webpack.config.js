const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
        ],
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=10000000&name=./fonts/[name].[ext]'
            }, 
        ],
    },
    stats: {
        colors: true
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            src: path.join(__dirname, './src'),
            '~': path.join(__dirname, './src/js'),
        },
    },
    devServer: {
        contentBase: __dirname,
    },
};
