// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//pulls markdown generator in
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questionArray = [
  {
    type: `input`,
    name: `github`,
    message: `What is your GitHiub username?`,
  },
  {
    type: `input`,
    name: `email`,
    message: `What is your email address?`,
  },
  {
    type: `input`,
    name: `linkedin`,
    message: `What is your LinkedIn username?`,
  },
  {
    type: `input`,
    name: `name`,
    message: `What is your project title?`,
  },
  {
    type: `input`,
    name: `desc`,
    message: `include a brief description of your repo/project`,
  },
  {
    type: `input`,
    name: `usage`,
    message: `Explain how your repo is to be used to a user`,
  },
  {
    type: `list`,
    name: `license`,
    message: `Which licensure does this fall under? (Choose one) `,
    choices: [`MIT`, `Apache 2.0`, `GPL 3.0`, `BSD 3`, `None`],
  },
  {
    type: "input",
    name: "modules",
    message: "Be sure to run when installing modules: ",
    default: "npm i",
  },
  {
    type: "input",
    name: "credit",
    message: "Give credit here:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Name your contributors:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log(`Success! Your readMe was generated!`);
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("Please answer the following questions to generate your ReadMe");
  inquirer.prompt(questionArray).then(function (data) {
    writeToFile(`README.MD`, generateMarkdown(data));
  });
}

// Function call to initialize app
init();
