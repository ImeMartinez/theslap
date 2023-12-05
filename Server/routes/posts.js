const Router = require('express');
const { postSomething, getLastPost, getUserPost, deletePost } = require('../controllers/posts');
const router = Router();

router.post("/", postSomething);

router.get("/last", getLastPost);

router.get("/:email", getUserPost);

router.delete("/", deletePost);


module.exports = router;