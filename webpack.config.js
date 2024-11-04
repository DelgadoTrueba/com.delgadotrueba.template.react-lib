const path = require('path');

const printCompilationMessage = require('./scripts/compilation.config.js');

module.exports = {
    entry: {
        index: './src/index.ts',
        sum: './src/components/sum.ts',
        button: './src/components/atoms/Button'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'auto',
        clean: true,
        library: {
            name: 'react-lib-[name]',
            type: 'umd',
        },
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals: {
        react: 'react',
        reactDOM: 'react-dom'
    }
};