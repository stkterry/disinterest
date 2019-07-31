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
  console.log(userId, pinId)
  return this.findByIdAndUpdate(
    userId,
    { $addToSet: { pins: pinId } },
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

module.exports = User = mongoose.model('users', UserSchema);
