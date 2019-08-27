const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
      type: String,
      required: true
  },
  last_name: {
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 32
  },
  pins: [{
    type: Schema.Types.ObjectId,
    ref: "pins"
  }],
  bins: [{
    type: Schema.Types.ObjectId,
    ref: "bins"
  }],
  date: {
    type: Date,
    default: Date.now
  },
});

UserSchema.statics.findPins = function (userId) {
  return this.findById(userId)
    .populate("pins")
    .then(user => user.pins);
};

UserSchema.statics.addPin = function(userId, pinId) {
  return this.findByIdAndUpdate(
    userId,
    { $addToSet: { pins: pinId } },
    { new: true }
  )
}

UserSchema.statics.addPins = function (userId, pinIds) {
  return this.findByIdAndUpdate(
    userId,
    { $addToSet: { pins: { $each: pinIds } } },
    { new: true }
  )
}

UserSchema.statics.removePin = function (userId, pinId) {
  return this.findByIdAndUpdate(
    userId,
    { $pull: { pins: pinId } },
    { new: true }
  )
}

UserSchema.statics.findBins = function (userId) {
  return this.findById(userId)
    .populate("bins")
    .then(user => user.bins);
};

UserSchema.statics.addBin = function (userId, binId) {
  return this.findByIdAndUpdate(
    userId,
    { $addToSet: { bins: binId } },
    {new: true}
  )
}

UserSchema.statics.removeBin = function (userId, binId) {
  return this.findByIdAndUpdate(
    userId,
    { $pull: { bins: binId } },
    { new: true }
  )
}

module.exports = User = mongoose.model('users', UserSchema);
