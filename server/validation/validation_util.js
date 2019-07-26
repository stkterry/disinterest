const validText = str => (
  (typeof str === "string" && str.trim().length > 0) ? str : ""
);

module.exports = {
  validText: validText
};
