const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        common: ['react', 'react-dom']
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '/static/images/[name].[ext]'
                }
            }, {
                loader: 'image-webpack-loader'
            }]
        }, {
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
                        minimize: true,
                        modules: true,
                        sourceMap: false
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: false
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false
                    }
                }]
            })
        }, {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react', 'stage-0']
                }
            }
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: "initial",
                    test: path.resolve(__dirname, "node_modules"),
                    name: "common",
                    enforce: true
                }
            }
        }
    },
    output: {
        chunkFilename: './static/scripts/[name].js',
        filename: './static/scripts/[name].js',
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/'
    },
    plugins: [
        new ExtractTextPlugin({
            allChunks: true,
            filename: 'static/styles/[name].css'
        }),
        new HtmlWebpackPlugin({
            chunks: ['common', 'app'],
            filename: 'index.html',
            template: './src/index.html',
            title: 'Very Punny'
        }),
        new WorkboxPlugin({
            globDirectory: 'dist',
            globPatterns: ['**/*.{html,js,css}'],
            swDest: path.join('dist', 'sw.js'),
            clientsClaim: true,
            skipWaiting: true,
        })
    ]
}