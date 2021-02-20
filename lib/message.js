const chalk = require("chalk")
const symbols = require('log-symbols');
function printMessage(code, message, data) {
  if (code > 0) {
    console.log(symbols.error, chalk.redBright(message));
    console.log(chalk.red(`\n${data}\n`))
  } else {
    console.log(symbols.success, chalk.green(message));
  }
}

const message = {
  print: printMessage,
  copy: {
    error: '\nThe target folder already exists or does not have permission！！！\n',
    success: '\nSuccess create the template~\n'
  },
  init: {
    error: '\nThe name entered can only contain numbers, letters and underscores (length:4-15).\n'
  }
}

module.exports = message