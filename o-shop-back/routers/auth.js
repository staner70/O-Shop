const express = require('express');
const router = express.Router();
const {getAdminAccess, getAccessToRoute} = require('../middlewares/authorization/auth');

const {
    login,
    logOut,
    profil,
    
    } = require('../controllers/authController');

router.post('/login', login);
router.get('/logout',logOut);
router.get('/profil',getAccessToRoute,getAdminAccess, profil);

module.exports = router;