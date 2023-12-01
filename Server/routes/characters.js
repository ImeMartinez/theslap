const Router = require('express');
const { getAllCharacters, getCharacterById, createCharacter, deleteCharacter, updateCharacter } = require('../controllers/characters');
const { validateJWT } = require('../middlewares/verifyJWT');
const { veryfyAdminRole } = require('../middlewares/verivyAdminRole');
const router = Router();

router.get("/", [validateJWT], getAllCharacters);
router.get("/:id",[validateJWT, veryfyAdminRole], getCharacterById);
router.post("/", createCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;