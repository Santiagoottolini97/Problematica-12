const tableMultipier = require('./script');

describe('Array test', () => {
    test('if tableMultipier is undefine return 10', () => {
        expect(tableMultipier(7, undefined)).toEqual([0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70]);
    });
    test('tableMultipier 3 * 4 is equal to 0', () => {
        expect(tableMultipier(3, 4)).toEqual([0, 3, 6, 9, 12]);
    });
    test('tableMultipier 3 * 4 is equal to 0', () => {
        expect(tableMultipier(3, 4)).not.toEqual([1, 4, 7, 9, 12]);
    });
});
