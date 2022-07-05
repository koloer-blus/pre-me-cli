// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const REACT_APP_PATH = path.resolve(__dirname, './src');
const ESLintPlugin = require('eslint-webpack-plugin');
const isProduction = process.env.NODE_ENV == "production";

const config = {
    mode: 'development',
    entry: "./src/main.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        open: true,
        host: "localhost",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
        }),
        new ESLintPlugin({
            fix: true,
            threads: true,
            emitWarning: true,
            emitError: true,
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: [REACT_APP_PATH],
            },
            {
                oneOf: [{
                        test: /\.(html)$/,
                        loader: 'html-loader'
                    },
                    {
                        test: /\.(j|t)sx?$/,
                        include: REACT_APP_PATH,
                        use: [{
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        '@babel/preset-react', ['@babel/preset-env', {
                                            useBuiltIns: 'usage',
                                            corejs: 2
                                        }]
                                    ],
                                    plugins: [
                                        '@babel/plugin-syntax-dynamic-import', ['@babel/plugin-proposal-class-properties', {
                                            'loose': true
                                        }]
                                    ],
                                    cacheDirectory: true // 加快编译速度
                                }
                            },
                            {
                                loader: 'ts-loader',
                                options: {
                                    happyPackMode: true // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
                                }
                            }
                        ]
                    },
                    {
                        test: /\.(less|css)$/,
                        use: [{
                                loader: 'style-loader'
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: false
                                }
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: true,
                                },
                            }
                        ]
                    },
                    {
                        test: /\.(scss|sass|css)$/,
                        use: [{
                                loader: 'style-loader'
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: false
                                }
                            },
                            {
                                loader: 'sass-loader',
                            }
                        ]
                    },
                    {
                        test: /\.svg$/,
                        use: ['@svgr/webpack']
                    },
                    {
                        test: /\.(jpg|jpeg|bmp|png|webp|gif)$/,
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: 'img/[name].[hash:8].[ext]',
                            outputPath: 'static',
                            publicPath: path.resolve(__dirname, './dist')
                        }
                    },
                    {
                        exclude: [/\.(js|mjs|ts|tsx|less|css|sass|scss|jsx)$/, /\.html$/, /\.json$/],
                        loader: 'file-loader',
                        options: {
                            name: 'media/[hash:8].[ext]',
                            outputPath: 'static',
                            publicPath: path.resolve(__dirname, './dist')
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
    },
    cache: {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.temp_cache'),
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};