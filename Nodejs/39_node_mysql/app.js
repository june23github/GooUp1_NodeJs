const express = require('express');
const mysql = require('mysql2');
const PORT = 5000;

const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "iW2306LHL",
  database: "gooup1_mysql"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const query = `select * from users where id = ${id}`;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });
})
app.get('/reservations/booking', (req, res) => {
    const query = `
        SELECT DISTINCT ro.id, ro.name, ro.area, ro.floor, ro.type, ro.status, ro.price
        FROM rooms as ro
        JOIN reservations as re ON re.room_id = ro.id;
    `;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });
})
app.get('/reservations/booking/:id', (req, res) => {
    const id = req.params.id;
    const query = `
        SELECT ro.id, ro.name, ro.area, ro.floor, ro.type, ro.status, ro.price, re.user_id
        FROM rooms as ro
        JOIN reservations as re ON re.room_id = ro.id
        WHERE re.user_id = ${id};
    `;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });
})

app.get('/reviews/:id', (req, res) => {
    const id = req.params.id;
    const query = `
        SELECT r.id, h.name, r.rating, r.comment, r.review_date, r.user_id
        FROM reviews as r JOIN hotels as h on r.hotel_id = h.id
        WHERE user_id = ${id};
    `;
    con.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });
})

app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
})