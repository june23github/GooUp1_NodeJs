const User = require('../models/user');
const bcrypt = require('bcryptjs');
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const passport = require('passport');

// Mock cho model User và bcrypt
jest.mock('../models/user');
jest.mock('bcryptjs');

describe('User Controller', () => {
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

  describe('getUsers', () => {
    it('should return all users', async () => {
      const mockUsers = [{ name: 'User A' }, { name: 'User B' }];
      User.find.mockResolvedValue(mockUsers);
      await getUsers(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockUsers);
    });

    it('should handle errors', async () => {
      const errorMessage = 'Database error';
      User.find.mockRejectedValue(new Error(errorMessage));
      await getUsers(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const mockUser = {
        name: 'New User',
        phone: '1234567890',
        address: 'Da Nang',
        email: 'user@example.com',
        role: 'user'
      };
      const hashedPassword = 'hashedPassword123';
      req.body = { ...mockUser, password: 'password123' };
      bcrypt.hash.mockResolvedValue(hashedPassword);
      User.create.mockResolvedValue({ ...mockUser, password: hashedPassword });

      await createUser(req, res);
      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
      expect(User.create).toHaveBeenCalledWith({ ...mockUser, password: hashedPassword });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ ...mockUser, password: hashedPassword });
    });

    it('should handle errors during creation', async () => {
      const errorMessage = 'Creation error';
      req.body = { name: 'Invalid User' };
      bcrypt.hash.mockResolvedValue('hashedPassword');
      User.create.mockRejectedValue(new Error(errorMessage));
      await createUser(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('updateUser', () => {
    it('should update an existing user', async () => {
      const mockUser = {
        _id: '123',
        name: 'Updated User',
        phone: '0987654321',
        address: 'Ho Chi Minh',
        email: 'updated@example.com',
        role: '668e4d5b714a0eb91adff664',
        save: jest.fn()
      };
      req.params = { id: '123' };
      const hashedPassword = 'hashedPassword123';
      bcrypt.hash.mockResolvedValue(hashedPassword);
      req.body = { 
        name: 'Updated User',
        phone: '0987654321',
        address: 'Ho Chi Minh',
        email: 'updated@example.com',
        password: hashedPassword,
        role: '668e4d5b714a0eb91adff664'
      };
      User.findById.mockResolvedValue(mockUser);
      await updateUser(req, res);
      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
      expect(mockUser.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(expect.objectContaining(req.body));
    });

    it('should return 404 if user not found', async () => {
      req.params = { id: 'nonexistent' };
      User.findById.mockResolvedValue(null);
      await updateUser(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'User not found.' });
    });
  });

  describe('deleteUser', () => {
    it('should delete an existing user', async () => {
      const mockUser = { _id: '123', name: 'User to Delete' };
      req.params = { id: '123' };
      User.findByIdAndDelete.mockResolvedValue(mockUser);
      await deleteUser(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Deleted user successfully' });
    });

    it('should return 404 if user not found for deletion', async () => {
      req.params = { id: 'nonexistent' };
      User.findByIdAndDelete.mockResolvedValue(null);
      await deleteUser(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'User not found.' });
    });
  });
});