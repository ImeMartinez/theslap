const { request, response } = require("express");
const Follower = require("../models/follower");

const followPost = (req = request, res = response) => {

    const { follower, following } = req.body;;


    if (!follower || !following) {
        res.status(400).json({ msg: "Missing data" });
        return;
    }

    newFollower = new Follower({
        follower: follower,
        following: following
    });

    newFollower.save().then((result) => {
        if (result) {
            res.status(200).json({
                msg: "usuario" + result.follower + "siguiendo a" + result.following,
                follower: result
            })
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });

};

const followDelete = (req = request, res = response) => {

    const { follower, following } = req.params;

    Follower.deleteOne({ follower: follower, following: following }).then((result) => {
        if (result) {
            res.status(200).json({
                follower: result
            })
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });
}

const isFollowing = (req = request, res = response) => {
    const { email } = req.params;

    Follower.find({ follower: email }).then((result) => {
        if (result) {
            res.status(200).json({
                follows: result
            })
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });
}

module.exports = {
    followPost,
    followDelete,
    isFollowing
}