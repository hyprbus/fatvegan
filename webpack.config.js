var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var DEV = path.resolve(__dirname, "src/dev");
var OUTPUT = path.resolve(__dirname, "src/scripts");

var config = {
    entry: DEV + "/app.js",
    output: {
        path: OUTPUT,
        filename: "fatvegan.js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', 
                    use: ['css-loader?url=false&sourceMap', 'sass-loader?sourceMap']
                })
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),
        new ExtractTextPlugin('../css/style.css', {
            allChunks: true
        })
    ],
    devtool: 'source-map'
}

module.exports = config
