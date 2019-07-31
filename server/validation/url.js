const Validator = require("validator");
const { validText } = require("./validation_util");

module.exports = function validateUrlInput({ link }) {
  link = validText(link)

  const errors = {
    ...(Validator.isEmpty(link) && { link: "Must contain a valid link" }),
  };

  return {
    errors: errors,
    isValid: Object.keys(errors).length === 0
  };
};