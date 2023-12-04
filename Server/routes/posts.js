const Router = require('express');
const { postSomething, getLastPost } = require('../controllers/posts');
const router = Router();

router.post("/", postSomething);

router.get("/last", getLastPost);



module.exports = router;