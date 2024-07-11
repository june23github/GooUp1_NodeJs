const User = require('../models/user');
const sendMail = require('../services/mailService');


const register = async (req, res) => {
    try {
        const {email, username} = req.body;

        const existMail = await User.findOne({email});
        if (existMail) {
            res.status(400).json({
                message: "Email is already exist"
            })
        }
        await User.create({
            email,
            username
        }).then(user => {
            sendMail(email, username);
            res.status(200).json({
                message: "Register successfully, please check your email"
            })
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}

module.exports = register;