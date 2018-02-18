const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
            }
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
