const stringLength = require('./stringLength')

    test('stringLength throws an error if the string is empty', () => {
        expect(() => stringLength('')).toThrow('String must not be empty');
      });
      
      test('stringLength throws an error if the string is more than 10 characters', () => {
        expect(() => stringLength('12345678901')).toThrow('String must not be more than 10 characters');
      });
      test('returns the length of a string', () => {
    expect (stringLength('welcome')).toBe(7);
});