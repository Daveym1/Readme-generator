// function to generate markdown for README
function generateMarkdown(answers) {
  // The if-else statement writes the correct badge to the readme file depending on which license was chosen

  let badge;

  if (answers.license === "GNU AGPLv3") {
    badge =
      "[![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPLv3-bluestyle=plastic)](https://opensource.org/licenses/agpl-3.0)";
  } else if (answers.license === "GNU GPLv3") {
    badge =
      "[![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue?style=plastic)](https://opensource.org/licenses/gpl-3.0)";
  } else if (answers.license === "GNU LGPLv3") {
    badge =
      "[![License: GNU LGPLv3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg?style=plastic)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (answers.license === "Mozilla Public License 2.0") {
    badge =
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg?style=plastic)](https://opensource.org/licenses/MPL-2.0)";
  } else if (answers.license === "Apache License 2.0") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=plastic)](https://opensource.org/licenses/Apache-2.0)";
  } else if (answers.license === "MIT License") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=plastic)](https://opensource.org/licenses/MIT)";
  } else if (answers.license === "Boost Software License 1.0") {
    badge =
      "[![License](https://img.shields.io/badge/License-BSL%201.0-blue.svg?style=plastic)](http://www.boost.org/LICENSE_1_0.txt)";
  } else if (answers.license === "The Unlicense") {
    badge =
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg?style=plastic)](http://unlicense.org/)";
  }

  // The function returns the markdown that's written to the readme file

  let markdown = `
# ${answers.title}

${badge}
`;
  let sections = {
    Description: answers.description,
    Installation: answers.installation,
    Usage: answers.usage,
    Features: answers.features,
    How_to_Contribute: answers.contribute,
    Tests: answers.testing,
  };
  sections = Object.entries(sections).filter(([key, value]) => value !== "");
  sections.forEach(([key, value]) => {
    markdown += `
## ${key}

${value}
----
`;
  });
  return markdown;
}

//   return `
// # ${answers.title}

// ${badge}

// ## Description

// ${answers.description}

// ----

// ## Installation

// ${answers.installation}

// ----

// ## Usage

// ${answers.usage}

// ----

// ## License

// This project is licensed under ${answers.license}

// ----

// ## Features

// If your project has a lot of features, list them here.

// ----

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ----

// ## Tests

// ----

// ## Contact

// LinkedIn: ${answers.linkedin}

// `;
// }

module.exports = generateMarkdown;
