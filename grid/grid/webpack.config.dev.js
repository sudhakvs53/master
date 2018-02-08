var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');



module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/'
  },
  devServer: {
    port:3010,
    contentBase: './src',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader", options: {
                sourceMap: true
            }
        }, {
            loader: "less-loader", options: {
                sourceMap: true
            }
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
              sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
              sourceMap: true
          }
      }]
      },
      {
        "exclude": "/node_modules/",
        "include": path.join(__dirname, 'src'),
        "use": [
          {
            "loader": "source-map-loader"
          },
          {
            "loader": "babel-loader", "options": {
              sourceMap: true,
              "presets": ["react", "es2015", "stage-2"],
              "plugins": [
                "transform-object-rest-spread",
                "transform-decorators-legacy",
                "transform-class-properties"
              ]
            },
          }
        ],

        "test": /\.js?$/
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|png|jpg|gif|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
        use:[{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'fonts/[name].[ext]?[hash]'
          }
        }]        
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: __dirname + '/src/index.html', to: __dirname + '/public/dist/index.html' },
    ]),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.SourceMapDevToolPlugin({
      filename: 'bundle.js.map'
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    //new HtmlWebpackPlugin()
  ]
};
