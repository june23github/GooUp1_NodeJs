require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Role = require('../models/role');
const passport = require('../config/passport');

const register = async (req, res) => {
    try {
        const { name, phone, address, email, password, role } = req.body;
        bcrypt.hash(password, 10).then(async (hash) => {
            const user = await User.create({ name, phone, address, email, password: hash, role: role});
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(400).json({
                error: err.message
            });
        })
    } catch (err) {
        res.status(500).json({ 
            error: err.message 
        });
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400).json({
            message: 'Dont have email or password'
        })
    }
    try {
        passport.authenticate('local', (err, user, info) => {
            if (err) { return next(err); }
            if (!user) { return res.status(401).json({ message: 'Authentication failed, ' + info.message}); }
            
            // Tạo JWT token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 1*60*60 });
            return res.status(200).json({ 
                message: "Login successfully",
                token: token
            });
          })(req, res);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
};

const assignRole = async (req, res) => {
    try {
        const { userId, roleId } = req.body;
        const user = await User.findById(userId);
        const role = await Role.findById(roleId);
        if (user && role) {
            user.roles.push(role);
            await user.save();
            res.status(200).json({ message: 'Role assigned successfully.' });
        } else {
            res.status(404).json({ message: 'User or Role not found.' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    register,
    login,
    assignRole
};
