module.exports = {
  context: __dirname + '/src',
  devtool: 'source-map',
  entry: './main',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [__dirname + '/src'],
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  }
};
