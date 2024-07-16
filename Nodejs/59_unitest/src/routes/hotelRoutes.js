const express = require('express');
const { getHotels, createHotel, updateHotel, deleteHotel } = require('../controllers/hotelController');
const {auth, authorize} = require('../middlewares/checkRole');

const router = express.Router();

router.get('/', auth, authorize(['SuperAdmin', 'Admin']), getHotels);
router.post('/', auth, authorize(['SuperAdmin', 'Admin']), createHotel);
router.put('/:id', auth, authorize(['SuperAdmin', 'Admin']), updateHotel);
router.delete('/:id', auth, authorize(['SuperAdmin']), deleteHotel);

module.exports = router;
