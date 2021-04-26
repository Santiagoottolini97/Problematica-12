const zero = require('./script');

describe('Add zeros test', () => {
    test('Returns a string with leading zeros, the result is 000024', () => {
        expect(zero(24, 6)).toEqual('000024');
    });
    test('Returns a string with leading zeros, the result is 0000024', () => {
        expect(zero(24, 7)).toEqual('0000024');
    });
    test('Returns a string with leading zeros. Must contin five 0 ', () => {
        expect(zero(24, 7)).toContain('00000');
    });
});
