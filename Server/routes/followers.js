const Router = require('express');
const { followPost, followDelete, isFollowing } = require('../controllers/followers');
const router = Router();


router.get("/:email", isFollowing);

router.post("/", followPost);

router.delete("/:follower/:following", followDelete);


module.exports = router;