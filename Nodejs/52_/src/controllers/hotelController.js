const Hotel = require('../models/hotel');

const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const createHotel = async (req, res) => {
    try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json(hotel);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateHotel = async (req, res) => {
    try {
        const {id} = req.params;
        const hotel = await Hotel.findById(id);
        if (hotel) {
            Object.assign(hotel, req.body);
            await hotel.save();
            res.status(200).json(hotel);
        } else {
            res.status(404).json({ message: 'Hotel not found.' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteHotel = async (req, res) => {
    try {
        const {id} = req.params;
        const hotel = await Hotel.findByIdAndDelete(id);
        if (hotel) {
            res.status(200).json({
                message: 'Deleted hotel successfully'
            });
        } else {
            res.status(404).json({ message: 'Hotel not found.' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    getHotels,
    createHotel,
    updateHotel,
    deleteHotel
};
