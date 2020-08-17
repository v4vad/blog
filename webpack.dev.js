const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // optimize css
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');;


module.exports = merge(common, {
    mode: 'development',
    // devtool: 'inline-source-map',
});