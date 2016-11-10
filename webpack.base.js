/*eslint-env node */
module.exports = {

  module: {
    loaders: [
      { test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/   
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  }
};
