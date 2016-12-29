const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist'),
        publicPath: '/dist/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        inline: false,
        historyApiFallback: true,
        proxy: {
            '/api/*': {
            target: 'http://127.0.0.1:3000'
            }
        }
    },
}