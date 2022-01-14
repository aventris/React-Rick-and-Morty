const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "./",
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/')
    }
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 3005,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}