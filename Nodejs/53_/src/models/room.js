const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    name: { type: String, required: true },
    area: { type: Number, required: true },
    floor: { type: Number, required: true },
    type: {type: String, required: true},
    price: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'approved', 'booked'],
        default: 'pending',
        required: true
    },
});

module.exports = mongoose.model('Room', roomSchema);
