const path = require('path');
const webpack = require('webpack'); // 操作webpack自带的一些插件引入
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader'
        }]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/, // 正则匹配图片格式名
        use: [{
          loader: 'url-loader', // 使用url-loader
          options: {
            name: '[name].[ext]'
          }
        }]
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }, {
          loader: 'postcss-loader'
        }]
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"), // 本地服务器所加载文件的目录
    port: "8023", // 设置端口号为8023
    inline: true, // 文件修改后实时刷新
    historyApiFallback: true, //不跳转
    hot: true //热更新
  },
  devtool: '#cheap-module-eval-source-map', // 界面调试更顺畅，更快定位问题
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.template.html") // new一个这个插件的实例，并传入相关的参数
    }), // 自动生成html文件
    new webpack.HotModuleReplacementPlugin(), // 热更新插件,
    new webpack.NoEmitOnErrorsPlugin() // 清除不必要的信息展示
  ]
};