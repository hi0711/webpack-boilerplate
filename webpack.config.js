module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/app.js'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 3000,
    open: true,
    progress: true,
    watchContentBase: true
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
        exclude: /node_modules/,
      }
    ]
  }
};
