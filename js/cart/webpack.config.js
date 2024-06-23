const HTMLWebpackPlugin = require('html-webpack-plugin')
const  ModuleFederationPlugin  = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: "cartListPage",
            filename: 'remoteEntry.js',
            exposes : {
                './CartPage': './src/index'
            }
        })

    ]
}