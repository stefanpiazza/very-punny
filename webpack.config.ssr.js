const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
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
        path: path.resolve(__dirname, './ssr/dist/'),
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
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                camelCase: true,
                                // Keep same as class definition for now
                                localIdentName: '[local]',
                                importLoaders: 2,
                                modules: true,
                                sourceMap: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-0']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'static/scripts/common.js',
            minChunks: Infinity,
        }),
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'static/styles/[name].css'
        }),
        new WorkboxPlugin({
            globDirectory: 'ssr/dist',
            globPatterns: ['**/*.{html,js,css}'],
            swDest: path.join('ssr/dist', 'sw.js'),
            clientsClaim: true,
            skipWaiting: true,
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}