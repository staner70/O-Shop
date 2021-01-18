const express = require('express');
const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getOneUser);

router.post('/:id', addOneUser);

router.delete('/:id', deleteOneUser)

module.exports = router;