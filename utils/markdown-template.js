// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return ((license == 'None') ? '' : `![License](https://img.shields.io/badge/license-${license.split(' ')[0]}-yellow.png)`);

};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ((license == 'None') ? '' : `[${license}](./License/${license.split(' ')[0]}.txt)`);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ((license == 'None') ? '' : `## License
This application is covered under the ${renderLicenseLink(license)} license.
  `);
  }

  //  Uses only the selected values from the tableList question to create the Table of Contents
function renderTOC(tableList) {
  // empty string to pass the map results into
  let toc = '';
  tableList.map(result => {
    console.log(result);
   toc += `*[${result.split(' ')[0]}](#${result.toLowerCase().split(' ')[0]})\n\n`; // split to get first word and /n/n to get proper format

  });
  return toc;
}

//  All data from questions and functions listed above used to create md 

function generateMarkdown(data) {
return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${renderTOC(data.tableList)}

## Installation

${data.install}

## Usage

${data.usage}

${renderLicenseSection(data.license)}
## Contributing

${data.contribute}

## Tests

${data.testing}


## Questions

If you have any questions, please contact me by [email](mailto:${data.email}) or through [Github](https://github.com/${data.userName})

`};



module.exports = { generateMarkdown };