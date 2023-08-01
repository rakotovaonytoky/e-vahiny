// userSchema.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  login: String,
  mdp:String,
});

const User = mongoose.model("utilisateur", userSchema);

module.exports = User;
