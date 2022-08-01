// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	let myLicense = license.choices;
	console.log(license.choices);
	let myBadge = "";
	if (myLicense === "No License" || null) {
		return "";
	} else if (myLicense === "MIT") {
		return (myBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`);
	} else if (myLicense === "GNU GPLv3") {
		return (myBadge = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`);
	} else if (myLicense === "Apache") {
		return (myBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`);
	}
	console.log(myBadge);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	// console.log(data);
	return `# ${data.title} 
	
${myBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation 
${data.installation}


## Usage
${data.usage}


## License
This project is licensed with ${data.license}.


## Contributing
${data.contributing}


## Tests
${data.tests}


## Questions
See more details at https://www.github.com/${data.gitHub} or contact me at ${data.email}
`;
}

module.exports = { generateMarkdown };

// renderLicenseBadge,
// renderLicenseLink,
// renderLicenseSection,
