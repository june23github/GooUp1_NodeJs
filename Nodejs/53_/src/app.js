require('dotenv').config();
const express = require('express');
const passport = require('passport');
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/authRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
const db = require('./config/database');

db(process.env.DATABASE_URL);

const app = express();

app.use(express.json());
app.use(passport.initialize());

require('./config/passport');

app.use('/auth', authRoutes);
app.use('/hotels', hotelRoutes);
app.use('/users', userRoutes);
app.use('/rooms', roomRoutes);

app.listen(PORT, () => {
    console.log('Server is running on port 5000');
});
