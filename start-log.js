const command = 'node ./start.js';
const moment = require('moment');

require('child_process').exec(command, (error, stdout, stderr) => {
  let headerTitle = 'Overall Status: ';
  if (error || stderr) {
    headerTitle += 'Error \n';
  } else {
    headerTitle += 'Success \n';
  }
  headerTitle += `Run Date: ${moment.utc().format('YYYY-MM-DD HH:mm:ss')} \n`;

  let logContent = headerTitle + stdout + stderr;
  console.log(logContent);
  console.warn(stderr);
});
