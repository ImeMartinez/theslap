const Router = require('express');
const { postSomething, getLastPost, getUserPost } = require('../controllers/posts');
const router = Router();

router.post("/", postSomething);

router.get("/last", getLastPost);

router.get("/:email", getUserPost);



module.exports = router;