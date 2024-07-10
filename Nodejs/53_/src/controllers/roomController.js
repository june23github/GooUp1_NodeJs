const Room = require('../models/room');
const Reservation = require('../models/reservation');


const createRoom = async (req, res) => {
    try {
        const {hotel_id, name, area, floor, type, price } = req.body;
        const room = await Room.create({
            hotel_id,
            name,
            area,
            floor,
            type,
            price,
            status: 'pending'
        });
        res.status(201).json(room);
        
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const approveRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(
            req.params.id,
            { status: 'approved' },
            { new: true }
        );
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.json(room);
    }catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const reservationRoom = async (req, res) => {
    try {
        const {checkin_date, checkout_date } = req.body;
        const room_id = req.params.id;
        const userId = req.user._id;
        console.log(userId);

        const room = await Room.findById(room_id);
        if (!room || room.status !== 'approved') {
          return res.status(400).json({ message: 'Room not available' });
        }
    
        // Kiểm tra xem phòng đã được đặt trong khoảng thời gian này chưa
        const existingReservation = await Reservation.findOne({
          room_id:  room_id,
          status: 'booked',
        });
    
        if (existingReservation) {
          return res.status(400).json({ message: 'Room is already booked' });
        }
    
        const newReservation = new Reservation({
          room_id:  room_id,
          user_id: userId,
          checkin_date: checkin_date,
          checkout_date: checkout_date,
        });
    
        await newReservation.save();

        room.status = 'booked';
        await room.save();
    
        res.status(201).json(newReservation);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

const checkoutRoom = async (req, res) => {
    try {
      const { id } = req.params;

      const reservation = await Reservation.findById(id);
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      const room = await Room.findById(reservation.room_id);
      if (!room) {
        return res.status(404).json({ message: 'Room not found' });
      }
      await Reservation.findByIdAndDelete(id);
  
      // Cập nhật trạng thái phòng thành 'approved'
      room.status = 'approved';
      await room.save();
  
      res.json({ 
        message: 'Check-out successful. Reservation deleted and room status updated to approved.',
        room: room
      });
  
    } catch (error) {
      res.status(500).json({ message: 'Error during check-out', error: error.message });
    }
  };



module.exports = {
    createRoom,
    approveRoom,
    reservationRoom,
    checkoutRoom
};
