/*eslint-env node */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
var options = require('./webpack.base.js');
options.entry = './src';

options.output = {
  library: 'VueInfiniteScroll',
  libraryTarget: 'umd',
  filename: 'vue-lazy-load.js',
  path: './dist'
};
options.externals = {
  vue: 'Vue'
};

module.exports = options;
