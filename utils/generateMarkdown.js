// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generate markdown for README
class MarkDown {
static generateMarkdown(data) {
  return `
# ${data.title}

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
