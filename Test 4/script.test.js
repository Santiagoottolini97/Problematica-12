const multiplication = require('./script');

test('multiplication 3 * 4 is equal to 12', () => {
    expect(multiplication(3, 4)).toBe(12);
});
test('multiplication 3 * 5 is equal to 15', () => {
    expect(multiplication(3, 5)).toBe(15);
});
test('multiplication 4 * 4 is less than 5', () => {
    expect(multiplication(4, 4) < 5).toBeFalsy();
});
test('multiplication 3 * 2 is greater than 5', () => {
    expect(multiplication(3, 2) > 5).toBeTruthy();
});
test('multiplication 2 * 1 not to be 1', () => {
    expect(multiplication(2, 1)).not.toBe(1);
});
test('multiplication 3 * 1 not to be null', () => {
    expect(multiplication(3, 1)).not.toBeNull();
});
test('multiplication 4 * 5 not to be undefined', () => {
    expect(multiplication(4, 5)).not.toBeUndefined();
});
test('multiplication 2 * 2 is greater than 3', () => {
    expect(multiplication(2, 2)).toBeGreaterThan(3);
});
test('multiplication 3 * 4 is less than 13', () => {
    expect(multiplication(3, 4)).toBeLessThan(13);
});
