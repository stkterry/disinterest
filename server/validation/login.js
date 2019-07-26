const Validator = require("validator");
const { validText } = require("./validation_util");


module.exports = function validateLoginInput({ email, password }) {
  email = validText(email);
  password = validText(password);

  const errors = {
    ...(!Validator.isEmail(email) && { email: "Email is invalid" }),
    ...(Validator.isEmpty(email) && { email: "Email can not be empty" }),
    ...(Validator.isEmpty(password) && { password: "Email can not be empty" }),

  };

  return {
    errors: errors,
    isValid: Object.keys(errors).length === 0
  };
};