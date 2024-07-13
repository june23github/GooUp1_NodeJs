const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const path = require('path');


const app = express();
const server = http.createServer(app);

function getFormattedDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

app.use(express.static(path.join(__dirname, 'public')));

const io = socketIo(server, {
    transport: ['pooling']
});

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('clientMessage', (msg) => {
        console.log(`Message from client: ${msg}`);
        socket.emit('message', getFormattedDateTime());
    })
})


server.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})