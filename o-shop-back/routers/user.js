const express = require('express');
const router = express.Router();

const {
    getAllUser,
    getOneUser,
    addOneUser,
    updateOneUser,
    deleteOneUser
    } = require('../controllers/userController');

router.get('/', getAllUser);
router.get('/:id', getOneUser);

router.post('/', addOneUser);
router.patch('/:id', updateOneUser)
router.delete('/:id', deleteOneUser)

module.exports = router;