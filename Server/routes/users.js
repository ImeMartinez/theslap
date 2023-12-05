const Router = require('express');
const { usersGet, userPost, userDelete, userPut, userPatch, userExsit, usersHotGet } = require('../controllers/users');
const router = Router();

router.get("/", usersGet);

router.get("/hot", usersHotGet);

router.get("/:email", userExsit);

router.post("/", userPost);



router.delete("/:id", userDelete);

router.put("/:id", userPut);

router.patch("/", userPatch);

module.exports = router;