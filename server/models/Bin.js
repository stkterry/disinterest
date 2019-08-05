const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BinSchema = new Schema({

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
  pins: [{
    type: Schema.Types.ObjectId,
    ref: "pins"
  }],
  image_url: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

BinSchema.statics.findPins = function(binId) {
  return this.findById(binId)
    .populate("pins")
    .then(bin => bin.pins);
};

BinSchema.statics.addPin = function (binId, pinId) {
  return this.findByIdAndUpdate(
    bindId,
    { $addToSet: { pins: pinId } },
    { new: true }
  )
};

module.exports = Bin = mongoose.model('bins', BinSchema);