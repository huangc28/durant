module.exports = {
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]',
      },
      {
        test: /\.png$/,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]',
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&' +
        'localIdentName=[name]__[local]!postcss',
      },
    ],
  },
}
