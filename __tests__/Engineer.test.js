const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object instance', () => {
    const e = new Engineer();
    expect(typeof (e)).toBe("object");
});

// testing each parameter and method all at once for Engineer object!
test('creates an Engineer object instance', () => {
    const engineer = new Engineer("Hatty", 101, "hatty123@yahoo.com", "https://github.com/madHatter");
    // Testing the data retrieval, constructor and getter methods
    expect(engineer.name).toBe(engineer.getName());
    expect(engineer.id).toBe(engineer.getId());
    expect(engineer.email).toBe(engineer.getEmail());
    expect(engineer.getGitHub()).toBe(engineer.getGitHub());
});