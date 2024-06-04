// Function to render license badge
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '!License: MIT';
    case 'Apache 2.0':
      return '!License: Apache 2.0';
    // Add other licenses as needed
    default:
      return ''; // Return empty string if no license
  }
}

// Function to render license section
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'This application is covered under the MIT License.';
    case 'Apache 2.0':
      return 'This application is covered under the Apache 2.0 License.';
    // Add other licenses as needed
    default:
      return ''; // Return empty string if no license
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, you can reach me via:
- GitHub: ${data.githubUsername}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
