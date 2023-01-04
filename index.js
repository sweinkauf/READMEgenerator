const fs = require("fs")
const path = require('path')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questionPrompt =[
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'list',
      message: 'What license does you project have?',
      name: 'badge',
      choices: ['Apache', 'MIT', 'IBM', 'Perl'],
    },
    {
      type: 'input',
      message: 'Enter description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Enter usage information',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter contributing',
      name: 'credit',
    },
    {
      type: 'input',
      message: 'Enter test instructions',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Enter your github/email for questions',
      name: 'questions'
    },
  
  ];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questionPrompt)
  .then(inquirerResponses => {
  writeToFile('README.md', generateMarkdown({...inquirerResponses }))
})}

init();

