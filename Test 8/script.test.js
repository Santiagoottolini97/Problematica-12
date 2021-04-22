const nested = require('./script');

test('square 2² + 3² is equal to 13', () => {
    expect(nested(2, 3)).toBe(13);
});
test('square 2² + 4² is equal to 20', () => {
    expect(nested(2, 4)).toBe(20);
});
test('square 2² + 4² not to be 0', () => {
    expect(nested(2, 4)).not.toBe(21);
});
test('square 2² + 4² not to be null', () => {
    expect(nested(2, 4)).not.toBeNull();
});
test('square 4² + 4² not to be undefined', () => {
    expect(nested(4, 4)).not.toBeUndefined();
});
test('square 4² + 4² is greater than 30', () => {
    expect(nested(4, 4)).toBeGreaterThan(30);
});
test('square 5² + 4² is less than 42', () => {
    expect(nested(5, 4)).toBeLessThan(42);
});
