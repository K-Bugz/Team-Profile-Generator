const Manager = require('../lib/Manager.js');

test("creates an Manager object instance", () => {
    const m = new Manager();
    expect(typeof (m)).toBe("object");
});

// testing each parameter and method all at once for the Manager object
test('creates an Manager object instance', () => {
    const manager = new Manager("Dave", 11, "david@gmail.com", 1301);
    // Testing the data retrieval, constructor and getter methods
    expect(manager.name).toBe(manager.getName());
    expect(manager.id).toBe(manager.getId());
    expect(manager.email).toBe(manager.getEmail());
    expect(manager.getOfficeNumber()).toBe(manager.getOfficeNumber());
});