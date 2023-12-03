const { request, response } = require("express");
const User = require("../models/user");
const { generateJWT } = require("../helpers/jwt");

const login = (req = request, res = response) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ msg: "Missing data" });
    }

    User.findOne({ email: email, password: password }).then((result) => {
        if (result) {
            generateJWT(email).then((token) => {
                res.status(200).json({
                    token: token,
                });

            }).catch((error) => {
                console.log(error);
                res.status(500).json({ msg: error });
            })

        } else {
            res.status(401).json({
                msg: "User or password incorrect",
            });
            return;

        }

    }).catch((error) => {
        console.log(error);
        res.status(500).json({ msg: "Error" });
    });


};



module.exports = {
    login,
}