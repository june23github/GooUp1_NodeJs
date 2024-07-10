use gooup1_mysql;
SELECT * FROM reservations;
SELECT * FROM rooms;
SELECT * FROM  users WHERE id = 1;


SELECT DISTINCT ro.id, ro.name, ro.area, ro.floor, ro.type, ro.status, ro.price
FROM rooms as ro JOIN reservations as re on re.room_id = ro.id;

SELECT ro.id, ro.name
FROM reservations as re JOIN rooms as ro on re.room_id = ro.id
WHERE re.user_id = 6;



SELECT r.id, h.name, r.rating, r.comment, r.review_date
FROM reviews as r JOIN hotels as h on r.hotel_id = h.id
WHERE user_id = 6;

INSERT INTO reservations (user_id, room_id, checkin_date, checkout_date)
VALUES (6, 2, '2024-10-01', '2024-10-05');

