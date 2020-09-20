const fs = require("fs");
const inquirer = require ("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions =  inquirer
.prompt([
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
    
]);

// function to write README file
function writeToFile(fileName, data) {

}


// function to initialize program
function init() {
    console.log(response);

}

// function call to initialize program
init();
