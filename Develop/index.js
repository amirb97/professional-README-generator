// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');

// TODO: Create a function to write README file
const writeFile = (fileName, data) => {
    console.log(fileName, data);
};

// Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project:(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            } 
        },
        {
            type: 'confirm',
            name: 'confirmDeploy',
            message: 'Is your project deployed live?',
            default: true
        },
        {
            type: 'input',
            name: 'liveURL',
            message: 'Enter the live URL:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a live URL link!');
                    return false;
                }
            }, 
            when: ({ confirmDeploy }) => {
                if (confirmDeploy) {
                  return true;
                } else {
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps, if any, are required for installation of your project?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a installation instructions!');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is your project intended to be used?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license do you wish to use?',
            choices: ['Apache', 'GNU GPLv3', 'MIT', 'ISC']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How would you like others to contribute to your project?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of how to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests are employed on your porject and how can they be run?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of how to run tests on your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ]);
};

// Function call to initialize app
init()
  .then(readmeData => {
      return generatePage(readmeData);
  })
  .then(writeREADME => {
      return writeFile('generated-README.md', writeREADME);
  })
  .catch(err => {
      console.log(err);
  })
