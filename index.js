// TODO: Include packages needed for this application
const { writeFile, fstat } = require("fs");
const { prompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
	return prompt([
		{
			type: "input",
			name: "title",
			message: "What is your Project Title? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please enter your Project's Title!");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "description",
			message: "Write a description of your Project? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please type a description of your Project!");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "installation",
			message:
				"What are the Installation Instructions for your Project? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log(
						"Please type a Installation Directions for your Project!"
					);
					return false;
				}
			},
		},
		{
			type: "input",
			name: "usage",
			message: "What is the usage information for your Project? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please explain the usage information for your Project!");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "contributing",
			message:
				"What are the contribution guidelines for your Project? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log(
						"Please explain the contribution guidelines for your Project!"
					);
					return false;
				}
			},
		},
		{
			type: "input",
			name: "tests",
			message: "What are the test instructions for your Project? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please enter the test instructions for your Project!");
					return false;
				}
			},
		},
		{
			type: "list",
			name: "license",
			message: "Which license applies to your application? (Select one)",
			choices: ["MIT", "GNU GPLv3", "Apache", "No License"],
		},

		{
			type: "input",
			name: "gitHub",
			message: "What is your GitHub username? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please enter your GitHub username!");
					return false;
				}
			},
		},
		{
			type: "input",
			name: "email",
			message: "What is your email? (Required)",
			validate: (titleInput) => {
				if (titleInput) {
					return true;
				} else {
					console.log("Please enter your email!");
					return false;
				}
			},
		},
	])
		.then((answers) => {
			return answers;
		})
		.catch((error) => {
			console.log(error);
		});
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	return new Promise((resolve, reject) => {
		//if there's an error, reject and return to the Promise's '.catch()' method
		writeFile("./dist/" + fileName, data, (err) => {
			if (err) {
				reject(err);
				//return out of function to avoid creating an empty read me
				return;
			}
			// console.log("passed error");

			//if promise is good then render with the '.then()' method
			resolve({
				ok: true,
				message: fileName + "README Created!",
			});
		});
	});
}

// TODO: Create a function to initialize app
async function init() {
	const answers = await questions();
	// console.log("init function");
	// console.log(answers);
	const fileName = "README.md";
	const readmeData = generateMarkdown(answers);
	// console.log(readmeData);

	await writeToFile(fileName, readmeData);
}

// Function call to initialize app
init();
