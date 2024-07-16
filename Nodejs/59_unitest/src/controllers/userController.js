const User = require('../models/user');
const bcrypt = require('bcryptjs')

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, phone, address, email, password, role } = req.body;
        
        const hash = await bcrypt.hash(password, 10)

        const user = await User.create({ name, phone, address, email, password: hash, role});
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ 
            error: err.message 
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { password, ...updateData } = req.body;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        Object.assign(user, updateData);
        user.password = await bcrypt.hash(password, 10);
        await user.save();
        
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (user) {
            res.status(200).json({
                message: 'Deleted user successfully'
            });
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
