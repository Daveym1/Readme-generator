// function to generate markdown for README
function generateMarkdown(answers) {
  // The if-else statement writes the correct badge to the readme file depending on which license was chosen

  let badge;
  if (answers.license === "MIT") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (answers.license === "BSD") {
    badge =
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (answers.license === "GNU") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

// The function returns the markdown that's written to the readme file

  return `
# ${answers.title}

${badge}

## Description

${answers.description}

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is licensed under ${answers.license}

## Contact

LinkedIn: ${answers.linkedin}

`;
}

module.exports = generateMarkdown;
