const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Role = require('../models/role');
const passport = require('../config/passport');
const { register, login, assignRole } = require('../controllers/authController');

jest.mock('bcryptjs');
jest.mock('jsonwebtoken');
jest.mock('../models/user');
jest.mock('../models/role');
jest.mock('../config/passport');

describe('Auth Controller', () => {
  let req, res, next;

  beforeEach(() => {
    req = {
      body: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const userData = {
        name: 'Test User',
        phone: '1234567890',
        address: 'Test Address',
        email: 'test@example.com',
        password: 'password123',
        role: 'user'
      };
      req.body = userData;
      
      const hashedPassword = 'hashedPassword123';
      bcrypt.hash.mockResolvedValue(hashedPassword);

      const createdUser = { ...userData, password: hashedPassword };
      User.create.mockResolvedValue(createdUser);

      await register(req, res);

      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
      expect(User.create).toHaveBeenCalledWith({
        ...userData,
        password: hashedPassword
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(createdUser);
    });

    it('should handle registration errors', async () => {
      req.body = {};
      const error = new Error('Registration failed');
      User.create.mockRejectedValue(error);

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Registration failed' });
    });
  });

  describe('login', () => {
    it('should login user successfully', async () => {
      req.body = {
        email: 'test@example.com',
        password: 'password123'
      };

      const user = { _id: 'userId123' };
      const token = 'jwt_token_123';

      passport.authenticate.mockImplementation((strategy, callback) => {
        callback(null, user, null);
        return (req, res, next) => {};
      });

      jwt.sign.mockReturnValue(token);

      await login(req, res);

      expect(passport.authenticate).toHaveBeenCalledWith('local', expect.any(Function));
      expect(jwt.sign).toHaveBeenCalledWith({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 3600 });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Login successfully',
        token: token
      });
    });

    it('should handle authentication failure', async () => {
      req.body = {
        email: 'test@example.com',
        password: 'wrongpassword'
      };

      passport.authenticate.mockImplementation((strategy, callback) => {
        callback(null, false, { message: 'Incorrect password' });
        return (req, res, next) => {};
      });

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Authentication failed, Incorrect password'
      });
    });
  });

  describe('assignRole', () => {
    it('should assign role to user successfully', async () => {
      req.body = {
        userId: 'userId123',
        roleId: 'roleId456'
      };

      const user = {
        _id: 'userId123',
        roles: [],
        save: jest.fn().mockResolvedValue(true)
      };
      const role = { _id: 'roleId456' };

      User.findById.mockResolvedValue(user);
      Role.findById.mockResolvedValue(role);

      await assignRole(req, res);

      expect(User.findById).toHaveBeenCalledWith('userId123');
      expect(Role.findById).toHaveBeenCalledWith('roleId456');
      expect(user.roles).toContain(role);
      expect(user.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Role assigned successfully.' });
    });

    it('should handle user or role not found', async () => {
      req.body = {
        userId: 'nonExistentUserId',
        roleId: 'nonExistentRoleId'
      };

      User.findById.mockResolvedValue(null);
      Role.findById.mockResolvedValue(null);

      await assignRole(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'User or Role not found.' });
    });
  });
});