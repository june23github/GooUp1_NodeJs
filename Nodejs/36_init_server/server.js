const express = require('express');


const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World',
    })
})

app.listen(PORT, () => {
    console.log(`Listen on https://localhost:${PORT}`);
})