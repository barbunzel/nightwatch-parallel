process.on('uncaughtException', function(error){
  console.log(error);
});

const nightwatch = require('nightwatch');
const minimist = require('minimist');

const done = () => {};
const settings = {};
const startNightwatch = () => {
  const args = minimist(process.argv.slice(2));
  const parameters = Object.assign({
    config: './nightwatch.conf.js',
    env: 'default',
    done,
    settings,
  }, args);

  nightwatch.runner(parameters);
};

const runTests = () => {
  startNightwatch();
};

runTests();
