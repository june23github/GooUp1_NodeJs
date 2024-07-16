const Room = require('../models/room');
const Reservation = require('../models/reservation');
const {
  createRoom,
  approveRoom,
  reservationRoom,
  checkoutRoom
} = require('../controllers/roomController');

jest.mock('../models/room');
jest.mock('../models/reservation');

describe('Room Controller', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {},
      params: {},
      user: { _id: 'user123' }
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  describe('createRoom', () => {
    it('should create a new room', async () => {
      const roomData = {
        hotel_id: 'hotel123',
        name: 'Deluxe Room',
        area: 30,
        floor: 2,
        type: 'Double',
        price: 100
      };
      req.body = roomData;
      const createdRoom = { ...roomData, _id: 'room123', status: 'pending' };
      Room.create.mockResolvedValue(createdRoom);

      await createRoom(req, res);

      expect(Room.create).toHaveBeenCalledWith({ ...roomData, status: 'pending' });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(createdRoom);
    });

    it('should handle errors', async () => {
      const error = new Error('Creation failed');
      Room.create.mockRejectedValue(error);

      await createRoom(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Creation failed' });
    });
  });

  describe('approveRoom', () => {
    it('should approve a room', async () => {
      req.params.id = 'room123';
      const updatedRoom = { _id: 'room123', status: 'approved' };
      Room.findByIdAndUpdate.mockResolvedValue(updatedRoom);

      await approveRoom(req, res);

      expect(Room.findByIdAndUpdate).toHaveBeenCalledWith('room123', { status: 'approved' }, { new: true });
      expect(res.json).toHaveBeenCalledWith(updatedRoom);
    });

    it('should handle room not found', async () => {
      req.params.id = 'nonexistent';
      Room.findByIdAndUpdate.mockResolvedValue(null);

      await approveRoom(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Room not found' });
    });
  });

  describe('reservationRoom', () => {
    it('should reserve a room successfully', async () => {
        const mockReservation = {
            _id: 'reservation123',
            room_id: 'room123',
            user_id: 'user123',
            checkin_date: '2024-08-01',
            checkout_date: '2024-08-05'
        };

        const mockRoom = {
            _id: 'room123',
            status: 'approved',
            save: jest.fn().mockResolvedValue({ _id: 'room123', status: 'booked' })
        };


        req.body = { checkin_date: '2024-08-01', checkout_date: '2024-08-05' };
        req.params = { id: 'room123' };
        req.user._id = 'user123';

        Room.findById.mockResolvedValue(mockRoom);
        Reservation.findOne.mockResolvedValue(null);

        await reservationRoom(req, res);

        expect(Room.findById).toHaveBeenCalledWith('room123');
        expect(Reservation.findOne).toHaveBeenCalledWith({
            room_id: 'room123',
            status: 'booked'
        });
        expect(mockRoom.save).toHaveBeenCalled();
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockReservation);
    });

    it('should return 400 if room is not available', async () => {
      const mockRoom = { _id: 'room123', status: 'unavailable' };
      
      req.params = { id: 'room123' };
  
      Room.findById.mockResolvedValue(mockRoom);
  
      await reservationRoom(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Room not available' });
    });
  
    it('should return 400 if room is already booked', async () => {
      const mockRoom = { _id: 'room123', status: 'approved' };
      const existingReservation = { _id: 'existingReservation' };
  
      req.params = { id: 'room123' };
  
      Room.findById.mockResolvedValue(mockRoom);
      Reservation.findOne.mockResolvedValue(existingReservation);
  
      await reservationRoom(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: 'Room is already booked' });
    });
  
    it('should handle errors and return 400', async () => {
      const errorMessage = 'Something went wrong';
  
      req.params = { id: 'room123' };
  
      Room.findById.mockRejectedValue(new Error(errorMessage));
  
      await reservationRoom(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
    });
  });

  describe('checkoutRoom', () => {
    it('should checkout a room', async () => {
      req.params.id = 'reservation123';
      const reservation = { _id: 'reservation123', room_id: 'room123' };
      const room = { _id: 'room123', status: 'booked', save: jest.fn() };
      Reservation.findById.mockResolvedValue(reservation);
      Room.findById.mockResolvedValue(room);
      Reservation.findByIdAndDelete.mockResolvedValue(reservation);

      await checkoutRoom(req, res);

      expect(Reservation.findById).toHaveBeenCalledWith('reservation123');
      expect(Room.findById).toHaveBeenCalledWith('room123');
      expect(Reservation.findByIdAndDelete).toHaveBeenCalledWith('reservation123');
      expect(room.status).toBe('approved');
      expect(room.save).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
        message: expect.any(String),
        room: room
      }));
    });

    it('should handle reservation not found', async () => {
      req.params.id = 'nonexistent';
      Reservation.findById.mockResolvedValue(null);

      await checkoutRoom(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Reservation not found' });
    });
  });
});
