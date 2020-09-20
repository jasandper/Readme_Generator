const fs = require("fs");
const inquirer = require ("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


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
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, function(err) {
        if(err) {
            return console.log(err)
        };
        console.log("Success!");
    })
}


// function to initialize program
function init() {
  inquirer.prompt(questions)
   .then ((responses) => {
    let info = generateMarkdown(responses)
    writeToFile("README.md", info)   
  });
}

// function call to initialize program
init();
