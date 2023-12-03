const mongoose = require('mongoose');;

const UserSchema = mongoose.Schema({
    follower: String,
    following: String
});

module.exports = mongoose.model("follower", UserSchema);