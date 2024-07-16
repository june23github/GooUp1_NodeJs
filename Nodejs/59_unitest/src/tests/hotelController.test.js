const Hotel = require('../models/hotel');
const {
  getHotels,
  createHotel,
  updateHotel,
  deleteHotel
} = require('../controllers/hotelController');

// Mock cho model Hotel
jest.mock('../models/hotel');

describe('Hotel Controller', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {},
      params: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  describe('getHotels', () => {
    it('should return all hotels', async () => {
      const mockHotels = [{ name: 'Hotel A' }, { name: 'Hotel B' }];
      Hotel.find.mockResolvedValue(mockHotels);

      await getHotels(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockHotels);
    });

    it('should handle errors', async () => {
      const errorMessage = 'Database error';
      Hotel.find.mockRejectedValue(new Error(errorMessage));

      await getHotels(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('createHotel', () => {
    it('should create a new hotel', async () => {
      const mockHotel = { name: 'New Hotel', address: 'Da Nang', description: 'My hotel', owner_id: '667e3db844d030562b2c6ac0' };
      req.body = mockHotel;
      Hotel.create.mockResolvedValue(mockHotel);

      await createHotel(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockHotel);
    });

    it('should handle errors during creation', async () => {
      const errorMessage = 'Creation error';
      req.body = { name: 'Invalid Hotel' };
      Hotel.create.mockRejectedValue(new Error(errorMessage));

      await createHotel(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('updateHotel', () => {
    it('should update an existing hotel', async () => {
      const mockHotel = { 
        _id: '123', 
        name: 'Updated Hotel', 
        stars: 4,
        save: jest.fn()
      };
      req.params = { id: '123' };
      req.body = { name: 'Updated Hotel', address: 'Da Nang', description: 'My hotel', owner_id: '667e3db844d030562b2c6ac0'};
      Hotel.findById.mockResolvedValue(mockHotel);

      await updateHotel(req, res);

      expect(mockHotel.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockHotel);
    });

    it('should return 404 if hotel not found', async () => {
      req.params = { id: 'nonexistent' };
      Hotel.findById.mockResolvedValue(null);

      await updateHotel(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Hotel not found.' });
    });
  });

  describe('deleteHotel', () => {
    it('should delete an existing hotel', async () => {
      const mockHotel = { _id: '123', name: 'Hotel to Delete' };
      req.params = { id: '123' };
      Hotel.findByIdAndDelete.mockResolvedValue(mockHotel);

      await deleteHotel(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Deleted hotel successfully' });
    });

    it('should return 404 if hotel not found for deletion', async () => {
      req.params = { id: 'nonexistent' };
      Hotel.findByIdAndDelete.mockResolvedValue(null);

      await deleteHotel(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Hotel not found.' });
    });
  });
});