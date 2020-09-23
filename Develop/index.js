const fs = require("fs");
const inquirer = require ("inquirer");
const gm = require("./utils/generateMarkdown.js")


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the Title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description?",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter application usage information",
        name: "usage"
    },
    {
        type: "list",
        message: "Select a license for your application:",
        name: "license",
        choices: [
            "MIT",
            "APACHE",
            "ISC",
            "Unlicensed"
        ]
    },
    {
        type: "input",
        message: "Enter contributon guidelines",
        name: "contributing"
    },
    {
        type: "input",
        message: "Enter test instructions",
        name: "name",

    },
    {
        type: "input",
        message: "What is your GitHut username?",
        name: "username"
    }

    
];

// function to write README file
function writeToFile(fileName, data) {
    markDown =gm(data)
    //console.log(markDown)
    fs.writeFileSync(fileName,markDown)
   
}


// function to initialize program
function init() {
  inquirer.prompt(questions).then ((responses) => {
 
    writeToFile("README.md", responses)   
  });
}

// function call to initialize program
init();
