const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    entry: {
        main : "./src/index.tsx"
    },
    output: {
        path : path.resolve(__dirname, "./public/"),
        filename: "main.js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        inline: true,
        port: 8081,
        historyApiFallback: true
    },
     module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]  
    },
    plugins: [
        new MiniCssExtractPlugin({            
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename : './index.html',
            template: './index.html'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx", ".scss"],
        modules: ["src", "node_modules"],
    },    
};