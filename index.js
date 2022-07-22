// Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Contributors'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)'
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'License?',
        choices:['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    }
];


// function to initialize app
async function runQuery() {
    return inquirer.prompt(questions)
    .then((data) =>{
        const markData = generateMarkdown.generateMarkdown(data)

        // writes README file
        fs.writeFile('README.md', markData, function(err) {
            if(err){
                console.log('Could not save file')
            } else {
                console.log('success: new README.md file generated inside the current folder')
            }
        })
        console.log(data)
        return data
    })
    .catch((error)=>{
        console.log(error)
    })
};

// function call to initialize app
runQuery();