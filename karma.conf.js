'use strict';

module.exports = function(config) {
  config.set({
    autoWatch: true,
    basePath: __dirname,
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    preprocessors: {
      'test/**/*.js': ['babel']
    },
    files: [
      'node_modules/forms-js/dist/forms-js.js',
      'test/**/*.js',
      'dist/index.html'
    ],
    exclude: [],
    port: 8989,
    browsers: [
      process.env.TRAVIS ? 'Chrome_travis_ci' : 'Chrome'
    ],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    plugins: [
      'karma-firefox-launcher',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-mocha',
      'karma-chai',
      'karma-babel-preprocessor'
    ],
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO
  });
};
