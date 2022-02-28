// Definetion of the child class Manager that inherits from its parent the Employee class. 
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    // unique method only given to the Manager. Peons get cubicals!!! 
    getOfficeNumber() {
        return this.officeNumber;
    }
};
module.exports = Manager;