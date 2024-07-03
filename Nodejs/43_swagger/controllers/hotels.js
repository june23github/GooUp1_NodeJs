const con = require('../db/db')

exports.getAllHotels = (req, res) => {
    const query = 'select * from hotels';
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