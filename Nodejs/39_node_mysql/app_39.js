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

app.get('/users', (req, res) => {
    const id = req.params.id;
    const query = 'select * from users';
    con.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });
})
app.get('/hotels', (req, res) => {
    const id = req.params.id;
    const query = 'select * from hotels';
    con.query(query, (err, result) => {
        if (err) throw err;
        res.status(200).json(result);

    });
})


app.listen(PORT, () => {
    console.log(`Listen on port: ${PORT}`);
})