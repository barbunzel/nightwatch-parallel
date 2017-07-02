const async = require('async');
const getenv = require('getenv');

const TIMES = getenv('TIMES_TO_LOOP') || 50;
const a = [];
a.length = TIMES;

module.exports = {
  'Assert Google search': (browser) => {
    const Google = browser.page.google();
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google');

    async.each(a, () => {
      Google.search();
      Google.clickLogo();
    });

    browser
      .waitForElementVisible('body', 1000)
      .assert.title('Google');

    browser.end();
  },
  after: function (browser) {
    browser.closeWindow();
  },
};
