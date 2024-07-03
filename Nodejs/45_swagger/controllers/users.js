const con = require('../db/db')

exports.getAllUsers = (req, res) => {
    const query = 'select * from users';
    con.query(query, (err, result) => {
        if (err){
            res.status(400).json({
                message: err
            })
        }else{
            res.status(200).json(result);
        }
    });
} 

exports.getUserByid = (req, res) => {
    const id = req.params.id;
    const query = `select * from users where id = ${id}`;
    con.query(query, (err, result) => {
        if (err){
            res.status(400).json({
                message: err
            })
        }else{
            res.status(200).json(result);
        }
    });
}