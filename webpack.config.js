const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // entry: {
    //     about: "./src/about.js",
    //     contact: "./src/contact.js"
    // },
    entry: './src/index.js',
    output: {
        //filename: "[name].bundle.js", // name comes from entry point object above
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/, // transform all js files
                exclude: /(node_modules)/, // optional param -  exclude files in node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    } // use babel-loader for transformation
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {loader: 'url-loader'}
                ]           
            }
        ]
    }
}

// to use a custom config file you've created - npx webpack --config my.custom.webpack.config