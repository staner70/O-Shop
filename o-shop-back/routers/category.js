const express = require('express');
const router = express.Router();

const { 
    getAllCategories, 
    getOneCategory, 
    createCategory, 
    updateCategory,
    deleteCategory 
    } = require('../controllers/categoryController');

router.get('/', getAllCategories);
router.get('/:id', getOneCategory);

router.post('/', createCategory);

router.patch('/:id', updateCategory);

router.delete('/:id', deleteCategory);

module.exports = router;