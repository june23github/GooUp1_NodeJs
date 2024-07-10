const express = require('express');
const { register, login, assignRole } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.post('/assign-role', assignRole);

module.exports = router;
