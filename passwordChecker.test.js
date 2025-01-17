const validatePassword = require('./passwordChecker');

describe('Password Validation', () => {

    
  test('should fail if password is less than 8 characters', () => {
    expect(validatePassword('abc123!')).toBe(false);
  });


  test('should fail if password does not contain a special character', () => {
    expect(validatePassword('abc12345')).toBe(false);
  });

});