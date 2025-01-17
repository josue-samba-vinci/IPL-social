function validatePassword(password) {
    const minLength = 8;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) return false;
    if (!specialCharRegex.test(password)) return false;

    return true;

}

module.exports = validatePassword;