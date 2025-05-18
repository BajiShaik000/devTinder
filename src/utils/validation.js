const validate = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, password, email } = req.body;
  if (!firstName.length || !lastName.length) {
    throw new Error("Please enter a valid name");
  } else if (!validate.isEmail(email)) {
    throw new Error("Please enter a valid email");
  } else if (!validate.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
};

module.exports = {
  validateSignUpData,
};
