

const urlCleaner = (url) => url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/")[0];

module.exports = {
  urlCleaner: urlCleaner
}