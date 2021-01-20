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
const { catchErrors } = require('../helpers/catchError');
const { getAccessToRoute, getAdminAccess } = require('../middlewares/authorization/auth');


router.get('/', getAccessToRoute, catchErrors(getAllProducts));
router.get('/:id', getAccessToRoute, catchErrors(getOneProduct));
router.get('/category/:categoryId', getAccessToRoute, catchErrors(getProductsByCategoryId));

router.post('/', getAccessToRoute, getAdminAccess, catchErrors(addNewProduct));

router.patch('/:id', getAccessToRoute, getAdminAccess, catchErrors(updateProduct));

router.delete('/:id', getAccessToRoute, getAdminAccess, catchErrors(deleteProduct));

module.exports = router;