const validatePassword = require('./passwordChecker');

describe('Password Validation', () => {


  test('should fail if password is less than 8 characters', () => {
    expect(validatePassword('abc123!')).toBe(false);
  });


  test('should fail if password does not contain a special character', () => {
    expect(validatePassword('abc12345')).toBe(false);
  });


  test('should fail if password does not contain a digit', () => {
    expect(validatePassword('abcdefg!')).toBe(false);
    expect(validatePassword('abcdefg!112')).toBe(true);
  });

  test('should fail if password contains "IPL" (case insensitive)', () => {
    expect(validatePassword('IPL123!abc')).toBe(false);
    expect(validatePassword('ipl123!abc')).toBe(false);
});

  test('should pass for a valid password', () => {
    expect(validatePassword('Valid123!')).toBe(true);
  });

});