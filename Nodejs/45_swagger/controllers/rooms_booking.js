const con = require('../db/db')

exports.getAllRoomsBooking = (req, res) => {
    const query = `
        SELECT DISTINCT ro.id, ro.name, ro.area, ro.floor, ro.type, ro.status, ro.price
        FROM rooms as ro
        JOIN reservations as re ON re.room_id = ro.id;
    `;
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

exports.getRoomsBookingOfUser = (req, res) => {
    const id = req.params.id;
    const query = `
        SELECT ro.id, ro.name, ro.area, ro.floor, ro.type, ro.status, ro.price, re.user_id
        FROM rooms as ro
        JOIN reservations as re ON re.room_id = ro.id
        WHERE re.user_id = ${id};
    `;
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