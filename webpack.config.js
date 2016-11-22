
var webpack = require('webpack');
var path = require('path');

var config = {
    devtool: 'inline-source-map',
    entry: [
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
          }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;
