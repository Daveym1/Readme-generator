// Importing packages

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// Questions

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project's title?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a short description about your project",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use it?",
    },
    {
      type: "list",
      name: "license",
      message: "What license does your project use?",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      name: "features",
      message: "What features does your project have?",
    },
    {
      type: "input",
      name: "contribute",
      message: "How can people contribute to the project?",
    },
    {
      type: "input",
      name: "testing",
      message: "How do you run tests on the project?",
    },
    {
      type: "input",
      name: "contributors",
      message:
        "Who worked on the project? (GitHub usernames separated by commas)",
    },
    {
      type: "input",
      name: "email",
      message: "What's your Email address?",
    },
  ])

  .then(function (answers) {
    const contributors = answers.contributors.split(",");
    const markdown = generateMarkdown(answers);
    return writeFileAsync("README.md", markdown);
  })

  .then(function () {
    console.log("Successfully wrote to README.md");
  })
  .catch(function (err) {
    console.log(err);
  });
