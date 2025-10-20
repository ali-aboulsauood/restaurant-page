const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),

        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                // Add/Remove extensions in the regular expression that is the value of `test` as needed.
                test: /\.(png|jpeg|jpg|svg)$/i,
                type: 'asset/resource',
            },

            {
                // Add/Remove extensions in the regular expression that is the value of `test` as needed.
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
