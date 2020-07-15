const path = require('path');
const autoprefixer = require('autoprefixer');
const WebpackNotifierPlugin = require('webpack-notifier');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const currentDir = path.resolve(process.cwd());

const postcssLoader = {
    loader: 'postcss-loader',
    options: {
        plugins: () => [autoprefixer({ browsersList: ['> 1%', 'last 2 versions', 'Firefox ESR'] })],
    },
};

let config = {
    mode: 'development',
    entry: {
        bundle: ['./src/app.scss'],
    },
    output: {
        path: `${currentDir}/dist`,
        filename: 'bundle.css',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                oneOf: [
                    {
                        resourceQuery: /^\?raw$/,
                        use: ['style-loader', 'css-loader'],
                    },
                    {
                        loaders: [
                            'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    importLoaders: 2,
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                            },
                            postcssLoader,
                            'sass-loader',
                        ],
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', postcssLoader, 'sass-loader'],
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loaders: {
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        name: '[name]-[hash].[ext]',
                    },
                },
            },
            {
                test: /\.(ttf|eot|woff|woff2|mp3)$/,
                loaders: ['file-loader'],
            },
        ],
    },
    plugins: [
        // Show notifications
        new WebpackNotifierPlugin(),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
    ],
    optimization: {
        noEmitOnErrors: true,
    },
};

if (process.env.NODE_ENV === 'production') {
    config = {
        mode: 'production',
        entry: {
            bundle: ['./src/app.scss'],
        },
        output: {
            path: `${currentDir}/dist`,
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: `${currentDir}/dist`,
                            },
                        },
                        { loader: 'css-loader', options: { minimize: true } },
                        postcssLoader,
                        'sass-loader',
                    ],
                },

                {
                    test: /\.css$/,
                    oneOf: [
                        {
                            resourceQuery: /^\?raw$/,
                            use: ['style-loader', 'css-loader'],
                        },
                        {
                            loaders: [
                                {
                                    loader: MiniCssExtractPlugin.loader,
                                    options: {
                                        publicPath: `${currentDir}/dist`,
                                    },
                                },
                                {
                                    loader: 'css-loader',
                                    options: {
                                        modules: true,
                                        importLoaders: 2,
                                        minimize: true,
                                        localIdentName: '[name]__[local]--[hash:base64:5]',
                                    },
                                },
                                postcssLoader,
                                'sass-loader',
                            ],
                        },
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader'],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'bundle.css',
            }),

            // Remove all moment locals except english ones
            new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /en/),
        ],
        optimization: {
            noEmitOnErrors: true,
            minimizer: [
                new TerserPlugin({
                    parallel: true,
                    terserOptions: {
                        ecma: 6,
                    },
                }),
                new OptimizeCSSAssetsPlugin({}),
            ],
        },
        stats: {
            warnings: false,
        },
    };
}

module.exports = config;
