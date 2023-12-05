const Router = require('express');
const { postSomething, getLastPost, getUserPost, deletePost, followingPosts } = require('../controllers/posts');
const router = Router();

router.post("/", postSomething);

router.get("/last", getLastPost);

router.get("/:email", getUserPost);

router.get("/following/:email", followingPosts);

router.delete("/", deletePost);


module.exports = router;