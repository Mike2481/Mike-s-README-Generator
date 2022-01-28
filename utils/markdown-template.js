// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // console.log(license);
  // if (license == 'None') {
  //   return ``;
  // } else {
  //   return `![License](https://img.shields.io/badge/license-${license}-yellow.png)`;
  // }
  return ((license == 'None') ? '' : `![License](https://img.shields.io/badge/license-${license}-yellow.png)`);

};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ((license == 'None') ? '' : `[${license}](./License/${license}.txt)`);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ((license == 'None') ? '' : `## License
  ${renderLicenseLink(license)}`);
  }

function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  ${data.tableList}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribute}

  ## Testing

  ${data.testing}

  ${renderLicenseSection(data.license)}

  ## Questions

  If you have any questions, please contact me by email at ${data.email} or through [Github](github.com/${data.userName})

`};



module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection };