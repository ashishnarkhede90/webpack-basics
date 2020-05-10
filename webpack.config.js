const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/, // transform all js files
                exclude: /(node_modules)/, // optional param -  exclude files in node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    } // use babel-loader for transformation
                }
            }
        ]
    }
}

// to use a custom config file you've created - npx webpack --config my.custom.webpack.config