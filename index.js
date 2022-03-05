// Local imported js classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRender");
// Npm classes
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const teamMember = []; // An array can be const
const index = []; // ID index

function buildTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "chooseAMember",
                choices: ["Manager", "Engineer", "Intern", "Make the team!"],
            },
        ])
        .then((choices) => {
            if (choices.chooseAMember == "Manager") {
                makeManager();
            } else if (choices.chooseAMember == "Engineer") {
                makeEngineer();
            } else if (choices.chooseAMember == "Intern") {
                makeIntern();
            } else {
                makeTeam();
            }
        });
}

function makeManager() {
    inquirer
        .prompt([
            {
                // Name 
                type: "input",
                name: "manName",
                message: "What's your managers name?",
                validate: (name1) => {
                    if (name1) { // If true it validates it. 
                        return true;
                    } else {
                        console.log("Please enter a valid manager's name. ");
                        return false;
                    }
                },
            },
            {
                // ID
                type: "input",
                name: "manID",
                message: "What's your managers ID?",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please enter a manager's ID");
                    }
                }
            },
            {
                // email 
                type: "input",
                name: "email",
                message: "What's your manager's email?",
                validate: (email1) => {
                    if (email1) { // If true it validates it. 
                        return true;
                    } else {
                        console.log("Please enter a valid manager's email. ");
                        return false;
                    }
                },
            },
            {
                // office number
                type: "input",
                name: "offNum",
                message: "What the manager's office number?",
                validate: (offNum1) => {
                    if (offNum1) {
                        return true;
                    } else {
                        console.log("Please enter a manager's office number");
                    }
                }
            }
        ])
        .then((answer) => {
            const manager = new Manager(answer.manName, answer.manID, answer.email, answer.offNum);
            teamMember.push(manager);
            index.push(answer.manID);
            buildTeam();
        });
}

function makeEngineer() {
    inquirer
        .prompt([
            {
                // Engineer Name 
                type: "input",
                name: "engName",
                message: "What's your engineer's name?",
                validate: (name1) => {
                    if (name1) { // If true it validates it. 
                        return true;
                    } else {
                        console.log("Please enter a valid engineer's name. ");
                        return false;
                    }
                },
            },
            {
                // Engineer ID
                type: "input",
                name: "engID",
                message: "What's your engineer's ID?",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please enter a engineer's ID");
                    }
                }
            },
            {
                // email 
                type: "input",
                name: "email",
                message: "What's your engineer's email?",
                validate: (email1) => {
                    if (email1) { // If true it validates it. 
                        return true;
                    } else {
                        console.log("Please enter a valid engineer's email. ");
                        return false;
                    }
                },
            },
            {
                // gitHub
                type: "input",
                name: "gitHub",
                message: "What the engineer's gitHub name (just name)?",
                validate: (gitHub) => {
                    if (gitHub) {
                        return true;
                    } else {
                        console.log("Please enter a engineer's office number");
                    }
                }
            }
        ])
        .then((answer) => {
            const Engineer = new Engineer(answer.engName, answer.engID, answer.email, answer.gitHub);
            teamMember.push(Engineer);
            index.push(answer.manID);
            buildTeam();
        });
}

function makeIntern() {
    inquirer
        .prompt([
            {
                // Name 
                type: "input",
                name: "intName",
                message: "What's your intern's name?",
                validate: (name1) => {
                    if (name1) { // If true it validates it. 
                        return true;
                    } else {
                        console.log("Please enter a valid intern's name. ");
                        return false;
                    }
                },
            },
            {
                // ID
                type: "input",
                name: "internID",
                message: "What's your intern's ID?",
                validate: (id) => {
                    if (id) {
                        return true;
                    } else {
                        console.log("Please enter a intern's ID");
                    }
                }
            },
            {
                // email 
                type: "input",
                name: "email",
                message: "What's your intern's email?",
                validate: (email1) => {
                    if (email1) {  // If true it validates it. 
                        return true;
                    } else {
                        console.log("Please enter a valid intern's email. ");
                        return false;
                    }
                },
            },
            {
                // School
                type: "input",
                name: "school",
                message: "What the intern's school?",
                validate: (offNum1) => {
                    if (offNum1) {
                        return true;
                    } else {
                        console.log("Please enter a intern's school");
                    }
                }
            }
        ])
        .then((answer) => {
            const intern = new Intern(answer.intName, answer.internID, answer.email, answer.school);
            teamMember.push(intern);
            index.push(answer.internID);
            buildTeam();
        });
}



// Run the program
buildTeam();