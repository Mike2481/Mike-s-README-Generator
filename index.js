// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a project title');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTable',
            message: 'Do you want to include a Table of Contents?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'tableList',
            message: 'Select all options you want to see in your Table of Contents',
            choices: [
                {
                    name: 'Installation Instructions'
                },
                {
                    name: 'Usage Instructions'
                },
                {
                    name: 'License Information'
                },
                {
                    name: 'Contribution Guidelines'
                },
                {
                    name: 'Test Instructions'
                },
                {
                    name: 'Questions'
                }
            ],
            when: ({confirmTable}) => {
                if (confirmTable) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'install',
           message: 'What are the installation instructions?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are the usage instructions for your project?'
        },
        
        {
            type: 'input',
            name: 'contribute',
            message: 'What are the contribution guidelines for your project?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'What are the test instructions for your project?'
        },
        {   // This will be used in the Questions section
            type: 'input',
            name: 'userName',
            message: 'What is your GitHub username? (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username');
                    return false;
                }
            }
        },
        {   // This will be used in the Questions section
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses do you want to include for your project? (Check all that apply)',
            choices: [
                'MIT',
                'GNU GPLv3',
                'Apache License 2.0',
                'ISC License',
            ],
        }
    ])
    .then((answers) => {
        // Do something with the answers
    })
    .catch((err) => {
        console.log(err);
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
