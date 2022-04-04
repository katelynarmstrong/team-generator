const Employee = require('../lib/Employee');

describe('Employee', () => {
    const employee = new Employee('Katelyn', 10, 'katelynarmstrong6@gmail.com','Employee');

    test('test employee has name', () => {
        expect(employee.name).toEqual(expect.any(String));
    });

    test('employee has a number ID', () => {
        expect(employee.id).toEqual(expect.any(Number));
    });

    test('employee has an email', () => {
        expect(employee.email).toEqual(expect.stringContaining('@'));
    });

    test ('employee has role of employee', () => {
        expect(employee.role).toBe('Employee')
    });
});