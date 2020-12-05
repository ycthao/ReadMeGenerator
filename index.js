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
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'author',
      message: 'What is the name of the author?',
    },
    {
      type: 'input',
      name: 'year',
      message: 'What year is this project written?',
    },
  ]);


const generateREADME = (answers) =>
  `# ${answers.title} # 

## Description ## 


## Table of Contents ##


## Installation ##


## Usage ##



## Contributing ##


## Tests ##


## Credits ##


## Author ##


## License ##

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
  ;

promptUser()
  .then((answers) => writeFileAsync('./Readme/README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));