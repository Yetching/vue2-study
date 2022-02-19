const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  mode: 'development',

  entry: {
    // main: ['@babel/polyfill', './src/main.js'],  // 全部加载
    main: './src/main.js',
  },

  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name][contenthash].js',
    chunkFilename: 'js/[name][contenthash].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: ['last 1 version', '> 1%'],
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
  ],
};
