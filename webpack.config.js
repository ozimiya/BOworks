const path = require("path");

module.exports = {
    mode: 'development',
    devServer: {
        open: true,
        openPage: "index.html",
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        port: 8080,
    },
    // entry: {bundle: './src/index.js'},
    entry: require('./webpack.entry'),
    output: {
        path: path.join(__dirname, "dist"),
        // path: path.join(__dirname, "test"),
        publicPath: "/js/",
        filename: '[name].js',
        library: ["com", "example"],
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map'

};