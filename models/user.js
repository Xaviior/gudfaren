const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    min: [3, "Name need to be more then 3 letters long!"],
  },
  bank: {
    type: Number,
  },
  inventory: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
