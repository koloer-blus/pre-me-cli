const message = require('./message');
const ora = require('ora');
const inquirer = require('inquirer');
const handlebars = require('handlebars');
const fs = require('fs-extra');

const templatePath = path.resolve(__dirname, `../template/`);
const aimPath = process.cwd();
/**
 * 复制模板
 * @param {string} template 
 * @param {string} aimDir 
 */
async function copyTemplate(template, aimDir) {
  const template = templatePath + `/${template}`;
  const aimDir = aimPath + `/${dirName}`;
  try {
    const exists = await fs.pathExists(aimDir)
    if (exists) {
      message.print(1, message.copy.error, `Error in aimPath: ${aimDir}`);
    } else {
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Set a global name for vertex project?',
            default: 'Default',
          },
        ])
        .then(async (answers) => {
          const initSpinner = ora(chalk.cyan('Start to create your project👋...'));
          initSpinner.start();
          await fs.copy(template, aimDir, {
            overwrite: false,
            errorOnExist: true
          });
          initSpinner.text = 'Initialize project successful.';
          initSpinner.succeed();
          message.print(0, message.copy.success);
          console.log(`
To get started:

	cd ${chalk.yellow('/' + aimDir)}
	${chalk.yellow('npm install')} or ${chalk.yellow('yarn install')}
	${chalk.yellow('npm run dev')} or ${chalk.yellow('yarn run dev')}
					`)
        });
    }
  } catch (err) {
    message.print(1, message.copy.error, err);
  }
}

module.exports = copyTemplate