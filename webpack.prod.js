const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const WebpackFontPreloadPlugin = require('webpack-font-preload-plugin');

module.exports = merge(common, {
    mode: 'production',

    plugins: [
        new WebpackFontPreloadPlugin({
            // Add/Remove extensions in the array that is the value of `extensions` as needed.
            extensions: ['woff', 'woff2'],

            crossorigin: true,

            loadType: 'preload',
        }),
    ],

    devtool: 'source-map',
});