const User = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find().populate('role');
        res.status(200).json(
            users.map(user => {
                return {
                    _id: user._id,
                    name: user.name,
                    address: user.address,
                    email: user.email,
                    role: user.role
                }
            })
    );
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            _id: user.id,
            name: user.name,
            address: user.address,
            email: user.email,
            role: user.role.name
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if (user) {
            Object.assign(user, req.body);
            await user.save();
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
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
