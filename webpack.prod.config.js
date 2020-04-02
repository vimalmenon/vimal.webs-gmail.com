const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "production",
    entry: {
        main : "./src/index.tsx"
    },
    output: {
        path : path.resolve(__dirname, "./public/"),
        filename: "main.js"
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
            dry: false,
            verbose: true,
            cleanOnceBeforeBuildPatterns: [
                path.resolve('public/**/*')
            ],

        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx", ".scss"],
        modules: ["src", "node_modules"],
    },    
};