// call to read/write
const fs = require('fs');
// call for inquirer
const inquirer = require('inquirer');

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
        },
    ])
    .then((data) =>
        fs.writeFile('./Readme/README.md', data, (err) =>
            err ? console.error(err) : console.log('Success!')
        )
    );