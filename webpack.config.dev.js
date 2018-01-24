const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        common: ['react', 'react-dom', 'firebase']
    },
    output: {
        chunkFilename: './static/scripts/[name].js',
        filename: './static/scripts/[name].js',
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: '/static/images/[name].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            camelCase: true,
                            // Keep same as class definition for now
                            localIdentName: '[local]',
                            importLoaders: 2,
                            modules: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0', 'react-hmre']
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'static/scripts/common.js',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            chunks: ['common', 'app'],
            filename: 'index.html',
            template: './src/index.html',
            title: 'Very Punny'
        }),
        new CopyWebpackPlugin([{
            from: './src/manifest.json',
            to: 'manifest.json'
        }]),
        new FaviconsWebpackPlugin({
            logo: './src/favicon.png',
            prefix: 'static/images/favicons/'
        }),
        new CompressionPlugin({
            test: /\.(js|html|css)$/,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}
