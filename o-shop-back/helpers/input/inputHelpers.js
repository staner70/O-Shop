const bcrypt = require('bcryptjs');

// Cette partie permet de savoir si les champs sont vides
const validateUserInput = (username, password) => {
    return username && password;
};
// Cette partie permet de comparer les apossword une fois hasher via bcrypt
const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {validateUserInput, comparePassword};