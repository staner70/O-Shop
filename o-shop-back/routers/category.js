const express = require('express');
const router = express.Router();


router.get('/', getAllCategories);
router.get('/:id', getOneCategory);

router.post('/', createCategory);

router.patch('/:id', updateCategory);

router.delete('/:id', deleteCategory);

module.exports = router;