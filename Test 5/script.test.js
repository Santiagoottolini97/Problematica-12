const division = require('./script');

test('division 2 / 0 is equal to 0', () => {
    expect(division(2, 0)).toBe('No se puede dividir por 0');
});
test('division 6 / 2 is equal to 3', () => {
    expect(division(6, 2)).toBe(3);
});
test('division 8 / 2 is equal to 4', () => {
    expect(division(8, 2)).toBe(4);
});
test('division 2 / 0 is less than 0', () => {
    expect(division(2, 0) < -1).toBeFalsy();
});
test('division 2 / 1 is greater than 0', () => {
    expect(division(2, 1) > 0).toBeTruthy();
});
test('division 2 / 1 not to be 0', () => {
    expect(division(2, 1)).not.toBe(0);
});
test('division 3 / 1 not to be null', () => {
    expect(division(3, 1)).not.toBeNull();
});
test('division 4 / 5 not to be undefined', () => {
    expect(division(4, 5)).not.toBeUndefined();
});
test('division 2 / 2 is greater than 1', () => {
    expect(division(2, 2)).toBeGreaterThan(0);
});
test('division 4 / 2 is less than 100', () => {
    expect(division(4, 2)).toBeLessThan(3);
});
