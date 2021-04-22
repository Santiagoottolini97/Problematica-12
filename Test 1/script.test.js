const text = require('./script');

test('add text', () => {
    expect(text('text')).toBe('text');
});
