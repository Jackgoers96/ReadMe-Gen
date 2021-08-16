// TODO: Include packages needed for this application
const inquirer = require("./utils/node_modules/inquirer/package.json");
const fs = require("fs");
const util = require(`util`);
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
    name: `linkdin`,
    message: `What is your LinkdIn username?`,
  },
  {
    type: `input`,
    name: `Name`,
    message: `What is your project title?`,
  },
  {
    type: `input`,
    name: `desc`,
    message: `include a brief description of your repo/project`,
  },
  {
    type: `list`,
    name: `usage`,
    message: `Explain how your repo is to be used to a user`,
    choices: [`MIT`, `Apache 2.0`, `GPL 3.0`, `BSD 3`, `None`],
  },
  {
    type: `input`,
    name: `license`,
    message: `Which licensure does this fall under? (Choose one) `,
  },
  {
    type: `input`,
    name: `userName`,
    message: `What is your GitHiub username?`,
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
