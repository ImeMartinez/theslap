const mongoose = require('mongoose');;

const UserSchema = mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    password: String,
    image: String
});

module.exports = mongoose.model("user", UserSchema);