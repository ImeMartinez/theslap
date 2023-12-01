const Router = require('express');
const { productsGet, productPost, productDelete, productPut, productPatch } = require('../controllers/products');
const router = Router();

router.get("/", productsGet);

router.post("/", productPost);

router.delete("/", productDelete);

router.put("/", productPut);

router.patch("/", productPatch);

module.exports = router;