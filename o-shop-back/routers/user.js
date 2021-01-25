const express = require('express');
const router = express.Router();

const {
    getAllUser,
    getOneUser,
    addOneUser,
    updateOneUser,
    deleteOneUser,
    associateWork,
    dissociateWork
    } = require('../controllers/userController');
const { catchErrors } = require('../helpers/catchError');
const { getAccessToRoute, getAdminAccess } = require('../middlewares/authorization/auth');

router.get('/', getAccessToRoute, catchErrors(getAllUser));
router.get('/:id', getAccessToRoute, catchErrors(getOneUser));

router.post('/', getAccessToRoute, getAdminAccess, catchErrors(addOneUser));
router.patch('/:id', getAccessToRoute, getAdminAccess, catchErrors(updateOneUser));
router.delete('/:id', getAccessToRoute, getAdminAccess, catchErrors(deleteOneUser));

router.patch('/:userId/shop/:shopId',  getAccessToRoute, getAdminAccess, catchErrors(associateWork));
router.delete('/:userId/shop/:shopId',  getAccessToRoute, getAdminAccess, catchErrors(dissociateWork));

module.exports = router;