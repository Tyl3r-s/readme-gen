class MarkDown {

  //creates license badge
  static renderLicenseBadge(license){
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/license/ISC)',
      gnuplv3: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://gnu.org/licenses/lgpl-3.0)'
    }
    return badges[license]
  }

  //creates the license link
  static renderLicenseLink(license){
    const licenseLinks = {
      mit: '[MIT](https://choosealicense.com/licenses/mit/)',
      isc: '[ISC](https://choosealicense.com/licenses/isc/)',
      gnuplv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
    }
    return licenseLinks[license];
  }

  //creates license section
  static renderLicenseSection(license){
    if(license){
      return`Licensed under the ${this.renderLicenseLink(license)} license`
    } else {
      return ''
    }
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
For inquiries, visit my github page: ${data.github} 
Or, you can reach me at ${data.email} 

## License
${this.renderLicenseSection(data.license)}`;
}
};

module.exports = MarkDown;
