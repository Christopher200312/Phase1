const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  PhoneNum: {
    type: Number,
  },
  isFemale: {
    type: Boolean,
  },
});

const userModel = mongoose.model("students", userSchema);

module.exports = userSchema