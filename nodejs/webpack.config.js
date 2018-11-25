const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Css for all frontend pages that already exist and in the new wiki section
const extractPublicCss = new ExtractTextPlugin('public.css');
// Css for all admin pages
const extractAdminCss = new ExtractTextPlugin('admin.css');
const extractTinymceCss = new ExtractTextPlugin('adminTinymce.css');

const pluginFolder = 'wordpress_nn_smart_tooltip';

let conf = {
    entry: {
        admin: './' + pluginFolder + '/src/admin.js',
        public: './' + pluginFolder + '/src/public.js',
    },
    plugins: [
        extractPublicCss,
        extractAdminCss,
        extractTinymceCss,
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, pluginFolder + '/assets'),
        publicPath: pluginFolder + '/assets/',
    },
    externals: {
        jquery: '$',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                include: path.resolve(__dirname, pluginFolder + '/src/admin/tinymceCss'),
                use: extractTinymceCss.extract(['css-loader', 'sass-loader']),
            },
            {
                include: path.resolve(__dirname, pluginFolder + '/src/public/css'),
                use: extractPublicCss.extract(['css-loader', 'sass-loader']),
            },
            {
                include: path.resolve(__dirname, pluginFolder + '/src/admin/css'),
                use: extractAdminCss.extract(['css-loader', 'sass-loader']),
            },
            {
                include: path.resolve(__dirname, pluginFolder + '/src/images'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/',
                        },
                    },
                ],
            },
            // {
            //     include: path.resolve(__dirname, 'gsma_wiki/src/public/css/images'),
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'public/images/',
            //                 publicPath: '../images/',
            //             },
            //         },
            //     ],
            // },
            // {
            //     include: path.resolve(__dirname, 'gsma_wiki/src/public/css/fonts'),
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'public/fonts/',
            //                 publicPath: '../fonts/',
            //             },
            //         },
            //     ],
            // },
            // {
            //     include: path.resolve(__dirname, 'gsma_wiki/src/common/fonts'),
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'common/fonts/',
            //                 publicPath: '../fonts/',
            //             },
            //         },
            //     ],
            // },
        ],
    },
    resolve: {
        modules: [
            path.resolve('./' + pluginFolder + '/src'),
            path.resolve('./node_modules'),
        ],
    },
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production ? false : 'eval-sourcemap';
    conf.watch = !production;

    return [conf];
};
