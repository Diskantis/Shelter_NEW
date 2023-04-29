const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

const filename = (ext, path='') => devMode ? `${path}[name]${ext}` : `${path}[name].[contenthash]${ext}`
const optimization = () => {
    const config = {
        splitChunks: {
            name: 'common',
            chunks: 'all'
        }
    }
    if(!devMode) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin(),
        ]
    }
    return config
}


module.exports = {
    mode,
    target,
    devtool,
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: path.resolve(__dirname, 'src/pages/main/index.js'),
        pets: path.resolve(__dirname, 'src/pages/pets/pets.js')
    },
    output: {
        filename: filename('.js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: filename('[ext]', 'assets/')
    },
    devServer: {
        port: 4200,
        open: true,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
            '@images': path.resolve(__dirname, 'src/assets/images')
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages/main/index.html'),
            filename: 'index.html',
            chunks: ['common', 'main'],
            inject: 'body',
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages/pets/pets.html'),
            filename: 'pets.html',
            chunks: ['common', 'pets'],
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: filename('.css')
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ico$/i,
                type: 'asset/resource',
                generator: {
                    filename: filename('[ext]', 'assets/favicon/')
                }
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator: {
                    filename: filename('[ext]', 'assets/icons/')
                }
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: filename('[ext]', 'assets/images/')
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: filename('[ext]', 'assets/fonts/')
                }
            },
            {
                test: /\.(xml|json|csv)$/i,
                type: 'asset/resource',
                generator: {
                    filename: filename('[ext]', 'assets/data/')
                }
            },
        ]
    }
}