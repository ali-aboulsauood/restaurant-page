const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const WebpackFontPreloadPlugin = require('webpack-font-preload-plugin');

module.exports = merge(common, {
    mode: 'production',

    plugins: [
        new WebpackFontPreloadPlugin({
            // Only preload WOFF2 font files
            extensions: ['woff2'],

            crossorigin: true,

            loadType: 'preload',
        }),
    ],

    devtool: 'source-map',
});