// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/scripts/index.js",
    output: {
        path: path.resolve(__dirname, "_site/scripts"),
        filename: "main.js",
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                // this is for using @import
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                    },
                },
                "postcss-loader", "liquid-loader"
            ],
        }, ],
    },
    plugins: [
        //     new HtmlWebpackPlugin({
        //         template: path.resolve(__dirname, "src", "index.html"),
        //     }),
        new MiniCssExtractPlugin({
            filename: "../style.css",
        }),
    ],
};