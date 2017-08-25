var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "src/dev");
var OUTPUT = path.resolve(__dirname, "src/scripts");

var config = {
    entry: DEV + "/app.js",
    output: {
        path: OUTPUT,
        filename: "fatvegan.js"
    },
    module: {
        loaders: [{
            include: DEV,
            loader: "babel-loader",
        }]
    }
};

module.exports = config;