// Definition of the child class Engineer that inherits from its parent the Employee class. 
const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getRole() {
        return "Engineer";
    }
    // unique method only given to the Engineer. Coders RULE!!
    getGitHub() {
        return this.gitHub;
    }
};
module.exports = Engineer;