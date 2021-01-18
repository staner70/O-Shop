const express = require('express');
const router = express.Router();


router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.get('/category/:categoryId', getProductsByCategoryId);

router.post('/', addNewProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;