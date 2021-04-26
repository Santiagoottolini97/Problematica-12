const text = require('./script');

describe('Function test', () => {
    test('add text', () => {
        expect(text('text')).toBe('text');
    });
});
