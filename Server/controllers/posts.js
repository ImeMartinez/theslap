const { request, response } = require("express");
const Post = require("../models/post");


const postSomething = (req = request, res = response) => {

    const { user, body, feeling, emoji } = req.body;;


    if (!user || !body || !feeling || !emoji) {
        res.status(400).json({ msg: "Missing data" });
        return;
    }

    newPost = new Post({
        user: user,
        body: body,
        feeling: feeling,
        emoji: emoji

    });

    newPost.save().then((result) => {
        if (result) {
            return res.status(200).json({
                msg: "Post creado",
                post: result
            });
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error " });
    });

};


module.exports = {
    postSomething,
}