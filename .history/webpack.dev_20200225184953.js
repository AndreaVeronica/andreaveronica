const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: "development",
  entry: {
    app: "./src/index.js",
    main: "./src/main.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      }
    ]
  }
});
