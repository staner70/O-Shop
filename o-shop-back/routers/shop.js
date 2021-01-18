const express = require('express');
const router = express.Router();

router.get('/', getAllShop);
router.get('/:id', getOneShop);
router.get('/user/:userId', getShopsByUser);

router.post('/', addNewShop);

router.patch('/:id', updateShop);

router.delete('/:id', deleteShop);

module.exports = router;