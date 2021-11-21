const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './index.js',


  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },


  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'core': path.resolve(__dirname, 'src/core')
    }
  },


  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: 'index.html'
    }),

    /** for ver 5.1.1(old) ===========*/
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),

    /** for ver 10.0.0(cur) ===========
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }), */

    new MiniCssExtractPlugin({
      filename: 'bundle.[hash].css'
    })
  ],


  // module: {
  //   rules: [
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: [
  //         MiniCssExtractPlugin.loader,
  //         "css-loader",
  //         "scss-loader",
  //       ],
  //     },
  //   ],
  // }


}
