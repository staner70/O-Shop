const express = require('express');
const router = express.Router();
const {getAdminAccess, getAccessToRoute} = require('../middlewares/authorization/auth');
const {
    login,
    logOut,
    profil,
    
    } = require('../controllers/authController');
const {catchErrors} = require('../helpers/catchError');
// Listing des routes GET/ POST ect... route complete /auth/login .....
router.post('/login', catchErrors(login));
router.get('/logout',getAccessToRoute, catchErrors(logOut));
router.get('/profil',getAccessToRoute,getAdminAccess, catchErrors(profil));

module.exports = router;