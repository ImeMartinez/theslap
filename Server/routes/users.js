const Router = require('express');
const { usersGet, userPost, userDelete, userExsit, usersHotGet, getUsersData } = require('../controllers/users');
const router = Router();

router.get("/", usersGet);

router.get("/data", getUsersData);

router.get("/hot", usersHotGet);

router.get("/:email", userExsit);

router.post("/", userPost);

router.delete("/:email", userDelete);



module.exports = router;