var options = require('./webpack.base.js');

options.entry = './example/index.js';
options.output = {
  filename: 'build.js',
  publicPath: '/',
};

module.exports = options;
