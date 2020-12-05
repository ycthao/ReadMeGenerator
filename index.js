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
      choices: ['MIT', 'Apache'],
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

${getLicense}

## Author 

${answers.author} 

## Question 

GitHub: ${answers.github}

For additional questions, please email me at ${answers.email} with "${answers.title} question" in the subject line.
  `; // closing generateREADME



const getLicense = (answers) => {
  if (answers.license.choices === "MIT") {
    const MIT = 
    `
MIT License

Copyright (c) [${answers.year}] [${answers.author}]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`
    return MIT;
  } else if (answers.license === "Apache") {
    const apache =
    `
Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
    `
  }


}





promptUser()
  .then((answers) => writeFileAsync('./Readme/README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));