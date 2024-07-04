require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router()


const User = require('../Model/user')

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            message: 'Dont have email or password'
        })
    }
    try {
        const existUser =  await User.findOne({email});
        if (!existUser) {
            bcrypt.hash(password, 10).then( async (hash) => {
                await User.create({
                    email,
                    password: hash
                })
                .then(user => {
                    res.status(201).json({
                        message: "Created successfully",
                        user: user
                    })
                })
            })
        }else{
            res.status(400).json({
                message: 'Email already exists'
            })
    }
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400).json({
            message: 'Dont have email or password'
        })
    }
    try {
        const user = await User.findOne({email });
        if (!user){
            res.status(401).json({
                message: 'Login not successfully',
                error: 'User not found'
            })
        }else{
            bcrypt.compare(password, user.password).then((result) => {
                if (result) {
                    const token = jwt.sign(
                        {email},
                            process.env.JWT_SECRET,
                        {
                            expiresIn: 1*60*60,
                        }
                    );
                    res.status(200).json({
                        message: "User successfully Logged in",
                        token: token,
                        user: user._id,
                    });
                } else {
                    res.status(400).json({ message: "Login not succesful" });
                }
            })
        }
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }

})

module.exports = router;