const validatePassword = require('./passwordChecker');

describe('Password Validation', () => {
  test('should fail if password is less than 8 characters', () => {
    expect(validatePassword('abc123!')).toBe(false);
  });

});