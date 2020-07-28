const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toBe('Name');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Email');
});

