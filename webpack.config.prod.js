var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            { from: 'public' }
        ])
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
