require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const url = process.env.DATABASE_URL;

const db = require('./database/db')
const authRoute = require('./routes/auth')
const protectedRoute = require('./routes/protected');

db(url);

const app = express();

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/auth/protected', protectedRoute);

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
})



