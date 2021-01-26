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
const { checkProductExist, checkCategoryName } = require('../middlewares/database/databaseErrorHelpers');

router.get('/', catchErrors(getAllProducts));
router.get('/:id(\\d+)', catchErrors(checkProductExist), catchErrors(getOneProduct));
router.get('/category/:categoryId', catchErrors(getProductsByCategoryId));

router.post('/', getAccessToRoute, getAdminAccess, catchErrors(checkCategoryName), catchErrors(addNewProduct));

router.patch('/:id(\\d+)', getAccessToRoute, getAdminAccess, catchErrors(checkCategoryName), catchErrors(updateProduct));

router.delete('/:id(\\d+)', getAccessToRoute, getAdminAccess, catchErrors(deleteProduct));

// associate route
// router.post('/:productId/category/:categoryId',  getAccessToRoute, getAdminAccess,catchErrors(associatePossess));
// router.delete('/:productId/category/categoryId',  getAccessToRoute, getAdminAccess,catchErrors(dissociatePoses));

module.exports = router;