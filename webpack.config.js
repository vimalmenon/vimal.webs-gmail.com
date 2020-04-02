const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    entry: {
        main : path.resolve(__dirname, "./src/index.tsx")
    },
    output: {
        path : path.resolve(__dirname, "/public/"),
        filename: "main.js"
    },
    devtool: "source-map",
    devServer: {
        publicPath: '/',
        contentBase: path.resolve(__dirname, "/public"),
        inline: true,
        port: 8081,
        historyApiFallback: true
    },
     module: {
        rules: [
            {
              test: /\.ts(x?)$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"]
                }
              }
            },
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
                loader: "class-to-classname"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|jpe?g|png|gif|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
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
            publicPath: '/',
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
        alias : {
            "dumb-component" : path.resolve(__dirname, "./src/pages/dumb-component"),
        }
    }
};