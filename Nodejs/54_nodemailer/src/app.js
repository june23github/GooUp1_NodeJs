require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5000;


const database = require('../src/config/database');
const registerRoute = require('../src/routes/registerRoute');

database(process.env.DATABASE_URL);


const app = express();

app.use(express.json());

app.use('/api', registerRoute);


app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})