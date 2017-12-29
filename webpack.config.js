const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js",
        common: ["react", "react-dom", "firebase"]
    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
        publicPath: "/",
        filename: "./static/scripts/[name].js",
    },
    devtool: "source-map",
    resolve: {
        alias: {
            react: "preact-compat",
            "react-dom": "preact-compat"
        }
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    },
    module: {
        rules: [{
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "/static/images/[name].[ext]"
                        }
                    },
                    {
                        loader: "image-webpack-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                            loader: "css-loader",
                            options: {
                                camelCase: true,
                                // Keep same as class definition for now
                                localIdentName: "[local]",
                                importLoaders: 2,
                                modules: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "static/scripts/common.js",
            minChunks: Infinity,
        }),
        new ExtractTextPlugin({
            allChunks: true,
            filename: "static/styles/[name].css"
        }),
        new BrowserSyncPlugin({
            host: "localhost",
            notify: false,
            open: false,
            port: 3000,
            proxy: "http://localhost:5000/"
        }),
        new HtmlWebpackPlugin({
            chunks: ["common", "app"],
            filename: "index.html",
            template: "./src/index.html",
            title: "Very Punny"
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
