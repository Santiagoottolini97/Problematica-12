const sum = require('./script');

describe('Sum test', () => {
    test('sum 33 + 66 is equal to 99', () => {
        expect(sum(33, 66)).toBe(99);
    });
    test('sum 33 + 67 is equal to 100', () => {
        expect(sum(33, 67)).toBe(100);
    });
    test('sum 30 + 60 is greater than 100', () => {
        expect(sum(30, 60) > 100).toBeFalsy();
    });
    test('sum 30 + 60 is less than 100', () => {
        expect(sum(30, 60) < 100).toBeTruthy();
    });
    test('sum 33 + 66 not to be 100', () => {
        expect(sum(33, 66)).not.toBe(100);
    });
    test('sum 33 + 66 not to be null', () => {
        expect(sum(33, 66)).not.toBeNull();
    });
    test('sum 33 + 66 not to be undefined', () => {
        expect(sum(33, 66)).not.toBeUndefined();
    });
    test('sum 33 + 68 is greater than 100', () => {
        expect(sum(33, 68)).toBeGreaterThan(100);
    });
    test('sum 33 + 68 is less than 100', () => {
        expect(sum(33, 68)).toBeLessThan(105);
    });
});
