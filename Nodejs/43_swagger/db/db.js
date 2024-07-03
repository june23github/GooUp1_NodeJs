const mysql = require('mysql2')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = con;