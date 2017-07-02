const chromedriver = require('chromedriver');
const HtmlReporter = require('nightwatch-html-reporter');

const reportFolder = __dirname + '/reports';

const reporter = new HtmlReporter({
  openBrowser: false,
  hideSuccess: false,
  reportsDirectory: reportFolder,
});

module.exports = {
  before: (done) => {
    chromedriver.start();
    done();
  },
  after: (done) => {
    chromedriver.stop();
    done();
  },
  beforeEach: (browser, done) => {
    done();
  },
  reporter: reporter.fn
};
