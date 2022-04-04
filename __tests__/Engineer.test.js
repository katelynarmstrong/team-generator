const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const engineer = new Engineer('Katelyn', 3, 'katelynarmstrong6@gmail.com', 'Engineer','katelynarmstrong') 
    
    test('test engineer has name', () => {
        expect(engineer.name).toEqual(expect.any(String));
    });

    test('engineer has a number ID', () => {
        expect(engineer.id).toEqual(expect.any(Number));
    });

    test('engineer has an email', () => {
        expect(engineer.email).toEqual(expect.stringContaining('@'));
    });

    test ('engineer has role of employee', () => {
        expect(engineer.role).toBe('Engineer')
    });

    test('engineer has github username', () => {
        expect(engineer.github).toEqual(expect.any(String));
    });
});