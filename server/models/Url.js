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
  created_by: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

UrlSchema.statics.findByLink = function(link) {
  return this.findOne({link: link})
    .then(url => url);
};

UrlSchema.statics.moreBoring = function (_id) {
  return this.findByIdAndUpdate(
    {_id: _id},
    { $inc: { snores: 1 }},
    { new: true }
  );
}

UrlSchema.statics.lessBoring = function (_id) {
  return this.findByIdAndUpdate(
    { _id: _id },
    { $inc: { snores: -1 } },
    { new: true }
  );
}

module.exports = Url = mongoose.model('urls', UrlSchema);
