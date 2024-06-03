//Function to render license badge
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