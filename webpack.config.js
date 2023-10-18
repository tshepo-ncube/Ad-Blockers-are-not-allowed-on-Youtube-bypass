const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        popup:'./src/popup.jsx', 
        content:'./src/content.js',
        background: './src/background.js',
      
         
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',//output of every entry file will have the same name
        //e.g. webpack will turn popup.jsx into popup.js
    },
    module:{
        //this is for webpack to load our jsx files
        //webpack does not understand jsx
        //we use loaders for this reason
        rules:[{
            test:/\.(js|jsx)$/,
            exclude : /node_modules/,
            use:{
                //babel is the tool we use to 
                //understand react code and transpile
                //it into plain js code that a browser
                //can understand
                loader:'babel-loader',
                options: {
                    presets:['@babel/preset-env','@babel/preset-react']
                }
            }
        }],
    },
    // externals : {
    //     axios:'axios',
    // }
    // ,
    //in our build, webpack does not include popup.html
     
    // we use webpack plugins to combat this issue.
    // plugins:[
    //     new HtmlWebpackPlugin({
    //     template:'./src/popup.html',
    //     filename:'popup.html',
    //     }),
    //     //Copy webpack plugin main purpose is to copy and paste all
    //     //files in specific folder to the final build,
    //     //in our case we will use it to copy all files inside public folder
    //     new CopyPlugin({
    //         patterns:[
    //             {from:"public"}
    //         ],
    //     }),
    // ],
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/popup.html',
          filename: 'popup.html',
        }),
        new CopyPlugin({
          patterns: [
            { from: 'public' }
          ],
        }),
        new webpack.ProvidePlugin({
          axios: 'axios',
        }),
      ],
    
}