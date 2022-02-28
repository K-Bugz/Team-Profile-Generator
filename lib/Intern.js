// Definetion of the child class Intern that inherits from its parent the Employee class. 
const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    // unique method only given to inters. 
    getSchool() {
        return this.school;
    }
};
module.exports = Intern;