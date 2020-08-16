const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // optimize css
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');;


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
    },
});