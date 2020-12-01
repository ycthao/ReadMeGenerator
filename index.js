// call to read/write
const fs = require('fs');
// call for inquirer
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    }
]);

const generateREADME = (answers) =>
    `My name is ${answers.name}`
    ;

promptUser()
    .then((answers) => writeFileAsync('./Readme/README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));