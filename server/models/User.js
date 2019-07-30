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
  pin_ids: [{
    type: Schema.Types.ObjectId,
    ref: "pins"
  }],
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = User = mongoose.model('users', UserSchema);
