const express = require('express');
const router = express.Router();

const { 
    getAllCategories, 
    getOneCategory, 
    createCategory, 
    updateCategory,
    deleteCategory 
    } = require('../controllers/categoryController');
const { catchErrors } = require('../helpers/catchError');
const { getAccessToRoute, getAdminAccess } = require('../middlewares/authorization/auth');

router.get('/', catchErrors(getAllCategories));
router.get('/:id(\\d+)', catchErrors(getOneCategory));

router.post('/',getAccessToRoute, getAdminAccess, catchErrors(createCategory));

router.patch('/:id(\\d+)',getAccessToRoute, getAdminAccess, catchErrors(updateCategory));

router.delete('/:id(\\d+)',getAccessToRoute, getAdminAccess, catchErrors(deleteCategory));

module.exports = router;