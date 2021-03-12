const express = require('express');
const router = express.Router();

// require routers files
const auth = require('./auth');
const user = require('./user');
const product = require('./product');
const category = require('./category');
const shop = require('./shop');
const role = require('./role');
// midldleware pour gerer l'ensemble des erreurs
const { errorHandler } = require('../middlewares/customErrorHandler');

// we categorized each file by their roles
// c'est ici qu'on separe chaque utilisation de routes (mais pas de GET/POst etc ici)
router.use('/auth', auth);
router.use('/user', user);
router.use('/product', product);
router.use('/category', category);
router.use('/shop', shop);
router.use('/role', role);

router.use(errorHandler);

module.exports = router;