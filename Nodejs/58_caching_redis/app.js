require('dotenv').config();
const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
    password: process.env.PASS,
    socket: {
        host: process.env.HOST,
        port: process.env.PORT_REDIS
    }
});

const PORT = process.env.PORT || 5000;

const db = require('./config/database');
const Hotel = require('./models/hotel');

db(process.env.DATABASE_URL);

client.on('error', (err) => {
    console.log(err);
});

client.on('connect', () => {
    console.log('Connected to Redis');
});

async function cache(req, res, next) {
    const hotelId = req.params.id;

    try {
        const data = await client.get(`hotel:${hotelId}`);
        if (data) {
            res.send(JSON.parse(data));
        } else {
            next();
        }
    } catch (err) {
        console.log(err);
        next();
    }
}

app.get('/api/hotels/:id', cache, async (req, res) => {
    try {
        const hotelId = req.params.id;

        // Lấy thông tin khách sạn từ cơ sở dữ liệu
        const hotelInfo = await Hotel.findById(hotelId);

        if (!hotelInfo) {
            return res.status(404).json({ message: 'Dont have hotel with that ID' });
        }

        // Lưu thông tin khách sạn vào Redis
        await client.setEx(`hotel:${hotelId}`, 3600, JSON.stringify(hotelInfo));

        res.status(200).json(hotelInfo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function startServer() {
    try {
        await client.connect();
        console.log('Connected to Resdis');

        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (err) {
        console.error('Cant connect to Redis:', err);
    }
}

startServer();