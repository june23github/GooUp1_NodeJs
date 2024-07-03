const express = require('express');
const mysql = require('mysql2');
const swagger = require('./swagger');
const usersRoutes = require('./routes/users');
const hotelsRoutes = require('./routes/hotels');
const reviewsRoutes = require('./routes/reviews');
const rooms_bookingRoutes = require('./routes/rooms_booking');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())

app.use('/users', usersRoutes);
app.use('/hotels', hotelsRoutes);
app.use('/rooms/booking', rooms_bookingRoutes);
app.use('/reviews', reviewsRoutes);


swagger(app)



app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
})