// const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // output all css to asinge file

module.exports = {
    entry: "./src/assets/scripts/index.js",
    output: {
        path: path.resolve(__dirname, "_site/assets/scripts"),
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
                    "postcss-loader",
                    "liquid-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        entry: "../images",
                        outputPath: "../images",
                    },
                }, ],
            },
        ],
    },

    plugins: [
        //     new HtmlWebpackPlugin({
        //         template: path.resolve(__dirname, "src", "index.html"),
        //     }),
        new MiniCssExtractPlugin({
            filename: "../css/style.css",
        }),
    ],
};