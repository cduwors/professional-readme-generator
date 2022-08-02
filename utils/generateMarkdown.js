// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
	let myLicense = license.license;
	let myBadge = "";
	if (myLicense === "No License" || null) {
		return "";
	} else if (myLicense === "MIT") {
		myBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
		return myBadge;
	} else if (myLicense === "GNU GPLv3") {
		myBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
		return myBadge;
	} else if (myLicense === "Apache") {
		myBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
		return myBadge;
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	let myLicenseLink = license.license;
	console.log(license.license);
	let myLink = "";
	if (myLicenseLink === "No License" || null) {
		return "This project not currently licensed.";
	} else if (myLicenseLink === "MIT") {
		myLink = `This project is licensed with MIT.  See License Information at https://opensource.org/licenses/MIT`;
		return myLink;
	} else if (myLicenseLink === "GNU GPLv3") {
		myLink = `This project is licensed with GNU GPLv3.  See License Information at https://www.gnu.org/licenses/gpl-3.0`;
		return myLink;
	} else if (myLicenseLink === "Apache") {
		myLink = `This project is licensed with Apache.  See License Information at https://opensource.org/licenses/Apache-2.0`;
		return myLink;
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title} 

${renderLicenseBadge(data)}


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
${renderLicenseLink(data)}


## Contributing
${data.contributing}


## Tests
${data.tests}


## Questions
See more details at https://www.github.com/${data.gitHub} or contact ${
		data.email
	}.
`;
}

module.exports = generateMarkdown;
