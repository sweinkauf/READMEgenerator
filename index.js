// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
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
      message: 'Enter contribution guidelines',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Enter test instructions',
      name: 'test',
    },
  ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
