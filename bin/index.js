#!/usr/bin/env node

const updateNotifier = require('update-notifier');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const inquirer = require('inquirer');
const handlebars = require('handlebars');
const fs = require('fs-extra');
const path = require('path');
const { Command, Option } = require('commander');
const pkg = require('../package.json');
const message = require('../lib/message');
const copyTemplate = require('../lib/copy');

const { version, name } = pkg;
const program = new Command();
// ==>version

const templatePath = path.resolve(__dirname, `../template/`);
const aimPath = process.cwd();

program
  .version(version, '-v, --version', `Output your local ${name}'s version.`);

// init
program
  .name('pre-me-cli')
  .usage('<commands> [options]')
	.command('init [fileDirName]')
  .action((fileDirName = 'template') => {
    const dirName = fileDirName.toLowerCase();
    if (/^[a-zA-Z][a-zA-Z0-9\-_]{2,15}$/.test(dirName)) {
      copyTemplate(dirName);
    } else {
      message.print(1, message.init.error, `The name「「${dirName}」」 of the project does not conform to the specification.`);
    }
  });

program.parse(program.argv);



const opts = program.opts();