const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  link: {
    type: String,
    required: true
  },
  snores: {
    type: Number,
    default: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Url = mongoose.model('urls', UrlSchema);
