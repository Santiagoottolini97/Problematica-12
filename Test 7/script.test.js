const potencia = require('./script');

describe('Multiplication test', () => {
    test('multiplication 2³ is equal to 8', () => {
        expect(potencia(2, 3)).toBe(8);
    });
    test('multiplication 3³ is equal to 27', () => {
        expect(potencia(3, 3)).toBe(27);
    });
    test('multiplication 1³ is less than 0', () => {
        expect(potencia(1, 3) < 0).toBeFalsy();
    });
    test('multiplication 1³ is greater than 0', () => {
        expect(potencia(1, 3) > 0).toBeTruthy();
    });
    test('multiplication 4³ not to be 0', () => {
        expect(potencia(4, 3)).not.toBe(65);
    });
    test('multiplication 2² not to be null', () => {
        expect(potencia(2, 2)).not.toBeNull();
    });
    test('multiplication 3² not to be undefined', () => {
        expect(potencia(3, 2)).not.toBeUndefined();
    });
    test('multiplication 4² is greater than 15', () => {
        expect(potencia(4, 2)).toBeGreaterThan(15);
    });
    test('multiplication 3² is less than 8', () => {
        expect(potencia(3, 2)).toBeLessThan(10);
    });
});
