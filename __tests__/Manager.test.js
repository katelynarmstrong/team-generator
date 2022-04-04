const Manager = require('../lib/Manager');

describe('Manager', () => {
    const manager = new Manager('Katelyn', 1, 'katelynarmstrong6@gmail.com','Manager', 302);

    test('test manager has name', () => {
        expect(manager.name).toEqual(expect.any(String));
    });

    test('manager has a number ID', () => {
        expect(manager.id).toEqual(expect.any(Number));
    });

    test('manager has an email', () => {
        expect(manager.email).toEqual(expect.stringContaining('@'));
    });

    test ('manager has role of Manager', () => {
        expect(manager.role).toBe('Manager')
    });

    test('manager has office number', () => {
        expect(manager.office).toEqual(expect.any(Number));
    });
});