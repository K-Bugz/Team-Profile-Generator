const Intern = require('../lib/Intern.js');

test('creates an Intern object instance', () => {
    const i = new Intern();
    expect(typeof (i)).toBe("object");
});

// testing each parameter and method all at once for the Intern object
test('creates an Intern object instance', () => {
    const intern = new Intern("Tweet", 1, "tweet@aol.com", "Illinois State University");
    // Testing the data retrieval, constructor and getter methods
    expect(intern.name).toBe(intern.getName());
    expect(intern.id).toBe(intern.getId());
    expect(intern.email).toBe(intern.getEmail());
    expect(intern.getSchool()).toBe(intern.getSchool());
});