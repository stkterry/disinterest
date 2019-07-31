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

module.exports = Pin = mongoose.model('pins', PinSchema);
