const express = require('express');

const PORT = 5000;

const app = express();

app.use((req, res, next) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString('vi-VN');
    console.log(`Request URL: ${req.url}, request method: ${req.method}, time: ${formattedDate}`);
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
})