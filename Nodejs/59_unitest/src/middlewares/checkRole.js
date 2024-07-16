require('dotenv').config();
const jwt = require('jsonwebtoken')
const User = require('../models/user');
const Role = require('../models/role');


const auth = async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ _id: decoded.id});
  
      if (!user) {
        throw new Error();
      }
  
      req.token = token;
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ error: 'Please authenticate.' });
    }
  };

const authorize = (roles) => {
    return async (req, res, next) => {
      const user = await User.findById(req.user._id).populate('role');        
      console.log(user.name, user.role.name);
      if (roles.includes(user.role.name)) {
          next();
      } else {
          res.status(403).json({ message: 'Forbidden' });
      }
    };
};

module.exports = { auth, authorize };
