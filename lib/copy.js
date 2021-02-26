const message = require('./message');
const ora = require('ora');
const inquirer = require('inquirer');
const handlebars = require('handlebars');
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

const templatePath = path.resolve(__dirname, `../template/`);
const aimPath = process.cwd();
/**
 * 复制模板
 * @param {string} aimDir 
 */
async function copyTemplate(aimName) {
  const aimDir = aimPath + `/${aimName}`;
  try {
    const exists = await fs.pathExists(aimDir)
    if (exists) {
      message.print(1, message.copy.error, `Error in aimPath: ${aimDir}`);
    } else {
      inquirer
        .prompt([
          // {
          //   type: 'input',
          //   name: 'globalName',
          //   message: 'Set a global name for vertex project?',
          //   default: aimName,
          // },
          {
            type: 'list',
            name: 'templateType',
            message: 'Choose one of dev for your project:',
            choices: ['webpack', 'vite'],
            default: 'webpack',
          },
          // {
          //   type: 'checkbox',
          //   name: 'config',
          //   message: 'Whether to enable the following settings',
          //   choices: ['eslint', 'typescript', 'commit check', 'prettier', 'test', 'redux', 'react-router', 'mock'],
          //   default: ['eslint', 'typescript', 'commit check', 'prettier', 'test', 'redux', 'react-router', 'mock']
          // },
          // {
          //   type: 'confirm',
          //   name: 'completeTemplate',
          //   default: 'Y'
          // }
        ])
        .then(async (options) => {
          const templateDir = templatePath + `/${options.templateType}`;
          // console.log(options)
          const initSpinner = ora(chalk.cyan('Start to create your project👋...'));
          initSpinner.start();
          await fs.copy(templateDir, aimDir, {
            overwrite: false,
            errorOnExist: true
          });
          initSpinner.text = 'Initialize project successful.';
          initSpinner.succeed();
          message.print(0, message.copy.success);
          console.log(`
          To get started:

          	use ${chalk.yellow('cd ./' + aimName)}
          	${chalk.yellow('npm install')} or ${chalk.yellow('yarn install')}
          	${chalk.yellow('npm run dev')} or ${chalk.yellow('yarn run dev')}
          					`)
        });
    }
  } catch (err) {
    message.print(1, message.copy.error, err);
    process.exit();
  }
}

module.exports = copyTemplate