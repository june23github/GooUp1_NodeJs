const express = require('express');
const { createRoom, approveRoom, reservationRoom, checkoutRoom } = require('../controllers/roomController');
const {auth, authorize} = require('../middlewares/checkRole');

const router = express.Router();

router.post('/', auth, authorize(['SuperAdmin', 'Admin', 'User']), createRoom);
router.post('/approve-room/:id', auth, authorize(['Admin']), approveRoom);
router.post('/reservations/:id', auth, authorize(['Admin', 'User']), reservationRoom);
router.post('/checkout/:id', auth, authorize(['Admin']), checkoutRoom);

module.exports = router;
