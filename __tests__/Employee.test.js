const Employee = require('../lib/Employee.js');

test('creates an employee object instance', () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

// testing each parameter and method all at once for employee object!
test('creates an Employee object instance', () => {
    const employee = new Employee("Ruff-Ruff", 7, "Ruff@hotmail.com");
    // Testing the data retrieval, constructor and getter methods
    expect(employee.name).toBe(employee.getName());
    expect(employee.id).toBe(employee.getId());
    expect(employee.email).toBe(employee.getEmail());
    expect(employee.getRole()).toBe("Employee");
});