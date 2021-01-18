const express = require('express');
const router = express.Router();

// require routers files
const auth = require('./auth');
const user = require('./user');
const product = require('./product');
const category = require('./category');
const shop = require('./shop');

// we categorized each file by their roles
router.use('/auth', auth);
router.use('/user', user);
router.use('/product', product);
router.use('/category', category);
router.use('/shop', shop);