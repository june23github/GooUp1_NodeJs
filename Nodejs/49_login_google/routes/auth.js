require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router()


const User = require('../models/user')

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
        passport.authenticate('local', (err, user, info) => {
            if (err) { return next(err); }
            if (!user) { return res.status(401).json({ message: 'Authentication failed, ' + info.message}); }
            
            // Tạo JWT token
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: 1*60*60 });
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

})

module.exports = router;