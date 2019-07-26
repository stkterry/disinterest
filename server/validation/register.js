const Validator = require("validator");
const { validText } = require("./validation_util");

module.exports = function validateLoginInput({first_name, last_name, email, password}) {
  first_name = validText(first_name)
  last_name = validText(last_name)
  email = validText(email);
  password = validText(password);

  const errors = {
    ...(Validator.isEmpty(first_name) && { name: "User must have first name"}),
    ...(Validator.isEmpty(last_name) && { name: "User must have last name"}),
    ...(!Validator.isEmail(email) && { email: "Email is invalid" }),
    ...(Validator.isEmpty(email) && { email: "Email can not be empty" }),
    ...(!Validator.isLength(password, 6, 30) && { password: "Password must be between 6 and 30 minutes" } ) 
  };

  return {
    errors: errors,
    isValid: Object.keys(errors).length === 0
  };
};