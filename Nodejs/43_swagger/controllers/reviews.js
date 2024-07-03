const con = require('../db/db')

exports.getReviewsOfUser = (req, res) => {
    const id = req.params.id;
    const query = `
        SELECT r.id, h.name, r.rating, r.comment, r.review_date, r.user_id
        FROM reviews as r JOIN hotels as h on r.hotel_id = h.id
        WHERE user_id = ${id};
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