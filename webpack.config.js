const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(sass|scss)$/,
        loader: extractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'components/[name]/[name].css'
  },
  plugins: [
    new extractTextPlugin('components/[name]/[name].css')
  ]
};
