const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const {auth, authorize} = require('../middlewares/checkRole');

const router = express.Router();

router.get('/', auth, authorize(['SuperAdmin', 'Admin']), getUsers);
router.post('/', auth, authorize(['SuperAdmin', 'Admin']), createUser);
router.put('/:id', auth, authorize(['SuperAdmin', 'Admin']), updateUser);
router.delete('/:id', auth, authorize(['SuperAdmin', 'Admin']), deleteUser);

module.exports = router;
