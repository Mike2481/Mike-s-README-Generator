// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const path = require("path");
// Brings in other file containing license and markdown functions
const { generateMarkdown } = require('./utils/markdown-template');

// TODO: Create an array of questions for user input

const questions = [
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
            type: 'input',
            name: 'description',
            message: 'How would you describe your project? (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description');
                    return false;
                }
            }
        },
        {
            //  Checkbox used so that table of contents can be customizable 
            type: 'checkbox',
            name: 'tableList',
            message: 'Select all options you want to see in your Table of Contents (Must Select At Least One)',
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
                    name: 'Contributing Guidelines'
                },
                {
                    name: 'Tests Instructions'
                },
                {
                    name: 'Questions'
                }
            ],
            validate: tableListChoices => {
                if (tableListChoices) {
                    return true;
                } else {
                    console.log('Please select at least one');
                    return false;
                }
            }
        },
        {
           type: 'input',
           name: 'install',
           message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.'
        },
        
        {
            type: 'input',
            name: 'contribute',
            message: 'What are the contribution guidelines for your project?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'What tests have your written for your application?'
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
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email address');
                    return false;
                }
            }
        },
        {
            //  License selected from a list with None as the default
            type: 'list',
            name: 'license',
            message: 'What license do you want to include for your project?',
            default: 'None',
            choices: [
                'None',
                'MIT',
                'GNU GPLv3',
                'Apache License 2.0',
                'ISC License',
            ],
        }
    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((returnedData) => {
            writeToFile('generatedReadme.md', generateMarkdown({...returnedData}))
        })
}

// Function call to initialize app
init();
