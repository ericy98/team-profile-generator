const Employee = require('../lib/Employee');

test('gets employee name', () => {
    const employee = new Employee('Arya');

    expect(employee.name).toBe('Arya');
});

test('get employee id', () => {
    const employee = new Employee('Arya');
    expect(employee.id).toEqual(expect.any(Number));
});

