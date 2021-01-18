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

router.get('/', getAllShop);
router.get('/:id', getOneShop);
router.get('/user/:userId', getAllShopByUser);

router.post('/', createShop);

router.patch('/:id', updateShop);

router.delete('/:id', deleteShop);

module.exports = router;