const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('gets office number of manager', () => {
    const manager = new Manager('Arya');
    
    expect(manager.office).toEqual(expect.any(Number));
})

test('get employee role', () => {
    const manager = new Manager('Arya');

    expect(manager.role).toBe('Manager');
})