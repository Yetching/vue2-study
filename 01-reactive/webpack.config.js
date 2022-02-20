const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  mode: 'development',

  output: {
    clean: true,
  },

  plugins: [new HtmlWebpackPlugin()],
};
