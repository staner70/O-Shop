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
const { getAccessToRoute, getAdminAccess } = require('../middlewares/authorization/auth');

router.get('/', getAccessToRoute, catchErrors(getAllShop));
router.get('/:id', getAccessToRoute, catchErrors(getOneShop));
router.get('/:shopId/user/:userId', getAccessToRoute, catchErrors(getAllShopByUser));

router.post('/', getAccessToRoute, getAdminAccess, catchErrors(createShop));

router.patch('/:id', getAccessToRoute, getAdminAccess, catchErrors(updateShop));

router.delete('/:id', getAccessToRoute, getAdminAccess, catchErrors(deleteShop));

module.exports = router;