const express = require('express');
const router = express.Router();

const { 
    getAllShop, 
    getOneShop, 
    getAllShopByUser, 
    createShop,
    updateShop,
    deleteShop 
    } = require('../controllers/shopController');
const { catchErrors } = require('../helpers/catchError');
const { shopSchema } = require('../helpers/validation/schema');
const { validateBody } = require('../helpers/validation/validationMiddleware');
const { getAccessToRoute, getAdminAccess } = require('../middlewares/authorization/auth');


router.get('/', catchErrors(getAllShop));
router.get('/:id(\\d+)', catchErrors(getOneShop));
router.get('/user/:userId', getAccessToRoute, catchErrors(getAllShopByUser));

router.post('/', getAccessToRoute, getAdminAccess, validateBody(shopSchema), catchErrors(createShop));

router.patch('/:id(\\d+)', getAccessToRoute, getAdminAccess, validateBody(shopSchema), catchErrors(updateShop));

router.delete('/:id(\\d+)', getAccessToRoute, getAdminAccess, catchErrors(deleteShop));

module.exports = router;