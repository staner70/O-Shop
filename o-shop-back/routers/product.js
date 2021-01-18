const express = require('express');
const router = express.Router();

const { 
    getAllProducts, 
    getOneProduct, 
    getProductsByCategoryId,
    addNewProduct,
    updateProduct,
    deleteProduct
    } = require('../controllers/productController');


router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.get('/category/:categoryId', getProductsByCategoryId);

router.post('/', addNewProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;