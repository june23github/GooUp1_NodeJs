require('dotenv').config();
const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(400).json({
        message: 'Not have token'
    });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err){
            return res.status(403).json({
                error: err
            });
        } 
        req.user = user;
        next(); 
    });
};
/**
 * @swagger
 * /api/protected:
 *   get:
 *     description: Endpoint yêu cầu xác thực JWT
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/', authenticateToken, (req, res) => {
    res.json({ message: 'This is protected data', user: req.user });
});

module.exports = router;
