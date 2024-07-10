const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    hotel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    review_date: { type: Date, required: true }
});

module.exports = mongoose.model('Review', reviewSchema);
