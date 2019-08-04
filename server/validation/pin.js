const Validator = require("validator");
const { validText } = require("./validation_util");

module.exports = function validatePinInput({ title, description, tags, url_link }) {
  title = validText(title);
  description = validText(description);
  tags = tags.map(tag => validText(tag));
  url_link = validText(url_link);

  const errors = {
    ...(Validator.isEmpty(url_link) && { link: "Must contain a valid link" }),
    ...(Validator.isEmpty(title) && { title: "Must contain a title" }),
    ...(Validator.isLength(title, 2, 100) && { title: "Title must be between 2 and 100 characters" }),
    ...(Validator.isEmpty(description) && { description: "Must contain a description" }),
    ...(Validator.isLength(title, 2, 500) && { description: "Description must not be longer than 500 characters" }),
    ...(tags.some(tag => !Validator.isLength(tag, 2, 25)) && { tags: "Tags must be between 2 and 25 characters" }),
  
  };

  return {
    errors: errors,
    isValid: Object.keys(errors).length === 0
  };
};