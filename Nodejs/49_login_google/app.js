require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 5000;
const url = process.env.DATABASE_URL;

const db = require('./database/db')
const protectedRoute = require('./routes/protected');
const swagger = require('./swagger');

db(url);

const app = express();

app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('Hello, This is Home Page');
})

/**
 * @swagger
 * /auth/google:
 *   get:
 *     description: Đăng nhập bằng tài khoản Google
 *     responses:
 *       302:
 *         description: Redirect đến Google để xác thực
 */
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     description: Callback của Google sau khi xác thực
 *     responses:
 *       200:
 *         description: Trả về JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */
app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        const token = jwt.sign(
            {
            googleId: req.user.googleId,
            displayName: req.user.displayName,
            email: req.user.email,
            }, 
            process.env.JWT_SECRET, 
            { expiresIn: 1*60*60 });
        res.json({ token });
    }
);

swagger(app);
app.use('/api/auth/protected', protectedRoute);


app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})



