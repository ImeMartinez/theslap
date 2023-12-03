const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

class Server {
    constructor() {
        this.app = express();

        this.port = process.env.PORT;

        this.usersPath = "/api/users";
        this.followersPath = "/api/followers";
        this.connect = process.env.CONNECTION
        this.authPath = "/api/auth";

        this.middleware();

        this.routes();

        this.db();

    }

    routes() {

        this.app.use(this.authPath, require("../routes/auth"));
        this.app.use(this.usersPath, require("../routes/users"));
        this.app.use(this.followersPath, require("../routes/followers"));

        this.app.get("/*", (req, res) => {
            res.status(404).send("404 Not Found");
        });
    }

    middleware() {

        this.app.use(express.json());
        this.app.use(cors());
    }

    db() {
        mongoose.connect(this.connect).then(() => {
            console.log("Conexión exitosa");
        }).catch((error) => {
            console.log("Error en la conexión");
            console.log(error);
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}
module.exports = Server;