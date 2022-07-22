// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


class MarkDown {

  static renderLicenseBadge(License){
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/license/ISC)',
      gnuplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL-v3-blue.svg)](https://gnu.org/licenses/lgpl-3.0)'
    }
    return badges[License]
  }

  // Generate markdown for README
    static generateMarkdown(data) {
        return `
# ${data.title}

${this.renderLicenseBadge(data.license)}

## Table of Contents
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Tests](#Tests)
  - [Contributing](#Contributing)
  - [Questions](#Questions)
  - [License](#License)

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Tests
${data.tests}

## Contributing
${data.contributing}

## Questions
For inquiries, visit my github page: ${data.email} 
Or, you can reach me at ${data.github} 

## License
${data.license}`;
}
};

module.exports = MarkDown;
