const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    }
}

// to use a custom config file you've created - npx webpack --config my.custom.webpack.config