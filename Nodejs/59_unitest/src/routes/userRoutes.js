const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const {auth, authorize} = require('../middlewares/checkRole');

const router = express.Router();

router.get('/', auth, authorize(['SuperAdmin']), getUsers);
router.post('/', auth, authorize(['SuperAdmin']), createUser);
router.put('/:id', auth, authorize(['SuperAdmin']), updateUser);
router.delete('/:id', auth, authorize(['SuperAdmin']), deleteUser);

module.exports = router;
