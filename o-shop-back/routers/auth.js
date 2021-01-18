const express = require('express');
const router = express.Router();

const {
    login,
    logOut,
    profil,
    
    } = require('../controllers/authController');

router.post('/login',login);
router.get('/logout',logOut);
router.get('/profil',profil);

module.exports = router;