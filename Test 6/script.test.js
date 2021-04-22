const tableMultipier = require('./script');

test('if tableMultipier is undefine return 10', () => {
    expect(tableMultipier(undefined)).toBe(10);
});
test('tableMultipier 3 * 4 is equal to 0', () => {
    expect(tableMultipier(3, 4)).toBe(0, 3, 6, 9, 12);
});
