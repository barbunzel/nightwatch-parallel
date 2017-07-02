const googleCommands = {
  search(searchText = 'rembrandt van rijn', resultText = 'Rembrandt - Wikipedia') {
    const self = this;

    self
      .assert.visible('input[type=text]')
      .setValue('input[type=text]', '')
      .setValue('input[type=text]', `${searchText}`)
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .waitForElementVisible('.g div:first-child > h3', `${resultText}`);
  },
  clickLogo() {
    const self = this;

    self.click('@logo');
  },
};

module.exports = {
  url() {
    return 'www.google.com';
  },
  elements: {
    logo: '#logocont',
  },
  commands: [googleCommands],
};
