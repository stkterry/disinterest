const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PinSchema = new Schema({
  url: {
    type: Schema.Types.ObjectId,
    ref: "urls",
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: []
  },
  image_url: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref:"users",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

PinSchema.statics.getUrl = function (urlId) {
  return this.findById(urlId)
    .populate("url")
    .then(pin => pin.url);
};

PinSchema.statics.getAuthor = function (authorId) {
  return this.findById(authorId)
    .populate("author")
    .then(pin => pin.author);
}

module.exports = Pin = mongoose.model('pins', PinSchema);
