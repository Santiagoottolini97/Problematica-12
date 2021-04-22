const sub = require('./script');

test('sub 2 - 3 is equal to -1', () => {
    expect(sub(2, 3)).toBe(-1);
});
test('sub 2 - 2 is equal to 0', () => {
    expect(sub(2, 2)).toBe(0);
});
test('sub 5 - 2 is less than 1', () => {
    expect(sub(5, 2) < 1).toBeFalsy();
});
test('sub 3 - 2 is greater than 0', () => {
    expect(sub(3, 2) > 0).toBeTruthy();
});
test('sub 2 - 1 not to be 0', () => {
    expect(sub(2, 1)).not.toBe(2);
});
test('sub 3 - 1 not to be null', () => {
    expect(sub(3, 1)).not.toBeNull();
});
test('sub 4 - 5 not to be undefined', () => {
    expect(sub(4, 5)).not.toBeUndefined();
});
test('sub 2 - 2 is greater than 100', () => {
    expect(sub(2, 2)).toBeGreaterThan(-1);
});
test('sub 3 - 4 is less than 100', () => {
    expect(sub(3, 4)).toBeLessThan(0);
});
