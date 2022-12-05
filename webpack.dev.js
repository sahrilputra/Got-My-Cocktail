const { merge } = require('webpack-merge');
const base = require('./webpack.common.js');

module.exports = merge(base, {
    mode: "development",
    devServer: {
        watchFiles: ["src/**/*"]
    }
})