const { request, response } = require("express");
const User = require("../models/user");
const { generateJWT } = require("../helpers/jwt");
const user = require("../models/user");

const usersGet = (req = request, res = response) => {
    const { searchTerm } = req.query;

    User.find({ name: RegExp(searchTerm) }).then((result) => {
        res.status(200).json({
            usersList: result
        });

    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });
};

const usersHotGet = (req = request, res = response) => {
    const { searchTerm } = req.query;

    User.find({ name: RegExp(searchTerm) }).sort({ _id: -1 }).limit(6).then((result) => {
        res.status(200).json({
            usersList: result
        });

    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });
};

const userExsit = (req = request, res = response) => {
    const email = req.params.email;

    User.findOne({ email: email }).then((result) => {
        if (result) {
            return res.status(200).json({
                msg: "User exist",
                user: result
            });
        } else {
            return res.status(200).json({
                msg: "User does not exist",
            });
        }

    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });
};


const userPost = (req = request, res = response) => {

    const { name, lastName, email, password, image } = req.body;;


    if (!name || !lastName || !email || !password) {
        res.status(400).json({ msg: "Missing data" });
        return;
    }

    newUser = new User({
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        image: image
    });

    newUser.save().then((result) => {
        if (result) {
            generateJWT(email).then((token) => {
                res.status(200).json({
                    token: token,
                    msg: "Usuario creado",
                    user: result
                });
                return token;

            }).catch((error) => {
                console.log(error);
                res.status(500).json({ msg: error });
            });
        }
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });

};


const userDelete = (req, res = response) => {
    const email = req.params.email;
    console.log(email);
    User.deleteOne({ email: email }).then((result) => {
        if (result) {
            res.status(200).json({
                msg: "User deleted",
                user: result
            });
        } else {
            res.status(404).json({
                msg: "User does not exist",
            });
        }

    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });
};


const getUsersData = (req = request, res = response) => {
    const users = req.query.users;
    const userEmailsArray = users.split(',');
    console.log(userEmailsArray);

    User.find({ email: { $in: userEmailsArray } }).then((result) => {
        return res.status(200).json({
            users: result
        });

    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });

}




module.exports = {
    usersGet,
    userExsit,
    userPost,
    userDelete,
    usersHotGet,
    getUsersData
}