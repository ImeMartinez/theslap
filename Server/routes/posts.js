const Router = require('express');
const { postSomething } = require('../controllers/posts');
const router = Router();

router.post("/", postSomething);



module.exports = router;