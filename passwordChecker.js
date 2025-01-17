function validatePassword(password) {
    const minLength = 8;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const digitRegex = /\d/;
    const forbiddenSubstringRegex = /ipl/i;

    if (password.length < minLength) return false;
    if (!specialCharRegex.test(password)) return false;
    if (!digitRegex.test(password)) return false;
    if (forbiddenSubstringRegex.test(password)) return false;

    return true;

}

module.exports = validatePassword;