const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                // this is for using @import
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
    ],
};