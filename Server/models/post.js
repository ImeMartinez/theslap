const mongoose = require('mongoose');;

const UserSchema = mongoose.Schema({
    user: String,
    body: String,
    feeling: String,
    emoji: { id: String, },
});

module.exports = mongoose.model("post", UserSchema);