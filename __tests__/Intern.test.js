const Intern = require('../lib/Intern');

describe('Intern', () =>{
    const intern = new Intern('Katelyn', 2, 'katelynarmstrong6@gmail.com','Intern','Vanderbilt University');

    test('test intern has name', () => {
        expect(intern.name).toEqual(expect.any(String));
    });

    test('intern has a number ID', () => {
        expect(intern.id).toEqual(expect.any(Number));
    });

    test('intern has an email', () => {
        expect(intern.email).toEqual(expect.stringContaining('@'));
    });

    test ('intern has role of employee', () => {
        expect(intern.role).toBe('Intern');
    });

    test('intern has a school name', () => {
        expect(intern.school).toEqual(expect.any(String));
    });
});