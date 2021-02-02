const express = require('express');
const { catchErrors } = require('../helpers/catchError');
const router = express.Router();
const { getAllRole, addOneRole, updateRole, deleteRole} = require('../controllers/roleController');
const { getAccessToRoute, getAdminAccess } = require('../middlewares/authorization/auth');
const { validateBody } = require('../helpers/validation/validationMiddleware');
const {roleSchema} = require('../helpers/validation/schema');


router.get('/', getAccessToRoute, getAdminAccess, catchErrors(getAllRole));
router.post('/', getAccessToRoute, getAdminAccess, validateBody(roleSchema), catchErrors(addOneRole));
router.patch('/:id', getAccessToRoute, getAdminAccess, validateBody(roleSchema), catchErrors(updateRole));
router.delete('/:id', getAccessToRoute, getAdminAccess, catchErrors(deleteRole));

module.exports = router;