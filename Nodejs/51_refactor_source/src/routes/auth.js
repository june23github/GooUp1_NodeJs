const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback',
  passport.authenticate('facebook'),
  (req, res) => {
    const userInfo = {
        facebookId: req.user.facebookId,
        name: req.user.name,
        email: req.user.email,
        profilePicture: req.user.profilePicture,
        createdAt: req.user.createdAt
    }
    res.status(200).json(userInfo);
  }
);

module.exports = router;