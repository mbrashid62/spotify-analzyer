// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/* eslint-disable no-console */
const webpack = require('webpack');
const webpackConfig = require('../../webpack.prod.config');
const colors = require('colors');

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log('The app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);

  return 0;
});
