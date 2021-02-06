const express = require('express');
const router = express.Router();
const {getAdminAccess, getAccessToRoute} = require('../middlewares/authorization/auth');
const {
    login,
    logOut,
    profil,
    updatePassword,
    resetPassword
    } = require('../controllers/authController');
const {catchErrors} = require('../helpers/catchError');
const { validateBody } = require('../helpers/validation/validationMiddleware');
const { updatePasswordSchema} = require('../helpers/validation/schema');

router.post('/login', catchErrors(login));
router.get('/logout',getAccessToRoute, catchErrors(logOut));
router.get('/profil',getAccessToRoute, catchErrors(profil));

//updatePassword
router.patch('/updatePassword', getAccessToRoute, validateBody(updatePasswordSchema), catchErrors(updatePassword));

//resetPassword
router.patch('/resetPassword', getAccessToRoute, getAdminAccess, catchErrors(resetPassword));

module.exports = router;