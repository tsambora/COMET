const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    context: __dirname,
    entry: './js/ClientApp.js',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.scss', '.css']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['./node_modules']
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: ['./node_modules']
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({ test: /\.js/ })
    ],
    devServer: {
        publicPath: '/public/',
        historyApiFallback: true
    }
}
