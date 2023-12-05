const { request, response } = require("express");
const Post = require("../models/post");
const Followers = require("../models/follower");


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

const getLastPost = (req = request, res = response) => {
    Post.find().sort({ _id: -1 }).limit(1).then((result) => {
        if (result) {
            return res.status(200).json({
                msg: "Post encontrado",
                post: result
            });
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error " });
    });
}

const getUserPost = (req = request, res = response) => {
    const email = req.params.email;
    Post.find({ user: email }).sort({ _id: -1 }).then((result) => {
        if (result) {
            return res.status(200).json({
                msg: "Post encontrado",
                post: result
            });
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error " });
    });

}

const deletePost = (req = request, res = response) => {
    const post = req.body;

    if (!post.user || !post.body || !post.feeling || !post.emoji) {
        res.status(404).json({ msg: "Missing Data" });
        return;
    }
    Post.deleteOne(post).then((result) => {
        if (result) {
            return res.status(200).json({
                msg: "Post eliminado",
                post: result
            });
        } else {
            return res.status(404).json({
                msg: "Post no encontrado",
                post: result
            });
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error " });
    });
}

const followingPosts = async(req = request, res = response) => {
    try {
        const email = req.params.email;

        followers = await Followers.find({ follower: email });;


        if (!followers || followers.length === 0) {
            return res.status(200).json({
                msg: "No hay seguidores",
                posts: []
            });
        }
        const followingUsers = followers.map(follower => follower.following)
        const posts = await Post.find({ user: { $in: followingUsers } }).sort({ _id: -1 });

        res.status(200).json({
            msg: "Post encontrado",
            post: posts
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error " });
    }

}



module.exports = {
    postSomething,
    getLastPost,
    getUserPost,
    deletePost,
    followingPosts
}