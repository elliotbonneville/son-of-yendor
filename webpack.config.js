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
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            require('@babel/plugin-proposal-export-default-from'),
                            require('@babel/plugin-proposal-object-rest-spread'),
                            require('@babel/plugin-proposal-export-namespace-from')
                        ],
                    }
                }
            },
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
