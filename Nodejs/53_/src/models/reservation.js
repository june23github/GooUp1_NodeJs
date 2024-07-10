const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    room_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    checkin_date: { type: Date, required: true },
    checkout_date: { type: Date, required: true }
});

module.exports = mongoose.model('Reservation', reservationSchema);
