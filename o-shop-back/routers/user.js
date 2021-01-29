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
const { checkUserExist } = require('../middlewares/database/databaseErrorHelpers');
const { validateBody } = require('../helpers/validation/validationMiddleware');
const { userSchema } = require('../helpers/validation/schema');

router.get('/', getAccessToRoute, catchErrors(getAllUser));
router.get('/:id(\\d+)', getAccessToRoute, catchErrors(checkUserExist),  catchErrors(getOneUser));

router.post('/', getAccessToRoute, getAdminAccess, validateBody(userSchema),  catchErrors(addOneUser));
router.patch('/:id(\\d+)', getAccessToRoute, getAdminAccess, validateBody(userSchema), catchErrors(updateOneUser));
router.delete('/:id(\\d+)', getAccessToRoute, getAdminAccess, catchErrors(deleteOneUser));

router.patch('/:userId/shop/:shopId',  getAccessToRoute, getAdminAccess, catchErrors(associateWork));
router.delete('/:userId/shop/:shopId',  getAccessToRoute, getAdminAccess, catchErrors(dissociateWork));

module.exports = router;