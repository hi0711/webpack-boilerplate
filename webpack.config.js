const MODE = 'development';
const enableSourceMap = (MODE === 'development');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: MODE,
  entry: [
    //'babel-polyfill',
    './src/js/main.js'
  ],
  plugins: [
    new UglifyJsPlugin()
  ],
  output: {
    path: `${__dirname}/dist/assets/js`,
    filename: 'main-bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enableSourceMap,
              importLoaders: 2,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: enableSourceMap
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enableSourceMap
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
};
