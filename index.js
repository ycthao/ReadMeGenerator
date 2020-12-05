// call to read/write
const fs = require('fs');
// call for inquirer
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

const promptUser = () =>
  inquirer.prompt([
    { // Asking for title
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    { // asking for author
      type: 'input',
      name: 'author',
      message: 'What is the name of the author?',
    },
    { // asking for year the project was written
      type: 'input',
      name: 'year',
      message: 'What year is this project written?',
    },
    { // asking for description
      type: 'input',
      name: 'description',
      message: 'Describe what your app does:',
    },
    {  // asking how to install app
      type: 'input',
      name: 'installation',
      message: 'How to install app?',
    },
    {  // asking how to use app
      type: 'input',
      name: 'usage',
      message: 'How do you use the app?',
    },
    {  // asking for contributor
      type: 'input',
      name: 'contributor',
      message: 'Who contributed to the app development?',
    },
    {  // asking for test
      type: 'input',
      name: 'test',
      message: 'Was any test done and how to run them?',
    },
    { // asking for license
      type: 'list',
      message: 'Choose your license?',
      name: 'license',
      choices: ['MIT', 'Apache', 'ISC', 'GNU'],
    },
    { // asking for email
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    { // asking for github
      type: 'input',
      name: 'github',
      message: 'What is your GitHub?',
    },
  ]);


const generateREADME = (answers) =>
  `# ${answers.title}  

![NPM](https://img.shields.io/npm/l/inquirer)

## Description 

${answers.description} 

## Table of Contents 

- [Description](#Description)
- [Table of Contents](#Table-of-Contents)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Author](#Author)
- [Questions](#Question)

## Installation 

${answers.installation} 

## Usage 

${answers.usage} 

## Contributing 

${answers.contributor} 

## Tests 

${answers.test} 

## License 

${answers.license}

## Author 

${answers.author} 

## Question 

GitHub: ${answers.github}

For additional questions, please email me at ${answers.email} with "${answers.title} question" in the subject line.
  `; // closing generateREADME


promptUser()
  .then((answers) => writeFileAsync('./Readme/README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));