const express = require('express');
const router = express.Router();
const {productImageUpload} = require('../middlewares/libraries/productImageUpload');
const { validateBody } = require('../helpers/validation/validationMiddleware');
const { productSchema } = require('../helpers/validation/schema');

const { 
    getAllProducts, 
    getOneProduct, 
    getProductsByCategoryId,
    addNewProduct,
    updateProduct,
    deleteProduct,
    imageUpload,
    updateQuantityById
    } = require('../controllers/productController');
const { catchErrors } = require('../helpers/catchError');
const { getAccessToRoute, getAdminAccess } = require('../middlewares/authorization/auth');
const { checkProductExist, checkCategoryName } = require('../middlewares/database/databaseErrorHelpers');


router.get('/', catchErrors(getAllProducts));
router.get('/:id(\\d+)', catchErrors(checkProductExist), catchErrors(getOneProduct));
router.get('/category/:categoryId', catchErrors(getProductsByCategoryId));

router.post('/', getAccessToRoute, getAdminAccess, validateBody(productSchema), catchErrors(addNewProduct));

router.patch('/:id(\\d+)', getAccessToRoute, getAdminAccess, validateBody(productSchema), catchErrors(updateProduct));

router.delete('/:id(\\d+)', getAccessToRoute, getAdminAccess, catchErrors(deleteProduct));

router.post('/:id/upload', [getAccessToRoute, productImageUpload.single("product_image")] , catchErrors(imageUpload));

router.patch('/cart', getAccessToRoute, catchErrors(updateQuantityById));

// associate route
// router.post('/:productId/category/:categoryId',  getAccessToRoute, getAdminAccess,catchErrors(associatePossess));
// router.delete('/:productId/category/categoryId',  getAccessToRoute, getAdminAccess,catchErrors(dissociatePoses));

module.exports = router;