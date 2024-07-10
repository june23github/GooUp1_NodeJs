USE gooup1_mysql;

SELECT * FROM users;
SELECT * FROM hotels WHERE owner_id = 6;
SELECT * FROM rooms WHERE hotel_id = 1;

SELECT 
    h.id, 
    h.name, 
    h.address, 
    h.description, 
    AVG(r.rating) AS avg_rating, 
    COUNT(r.id) AS total_reviews
FROM 
    hotels h
JOIN 
    reviews r ON h.id = r.hotel_id
WHERE owner_id = 1
GROUP BY 
    h.id, h.name, h.address, h.description
HAVING 
    avg_rating BETWEEN 1 AND 5
ORDER BY 
    h.name ASC ;

INSERT INTO hotels (name, address, description, owner_id) VALUES
('Hotel One', '1 First Street', 'Mô tả khách sạn 1', 1),
('Hotel Two', '2 Second Street', 'Mô tả khách sạn 2', 2),
('Hotel Three', '3 Third Street', 'Mô tả khách sạn 3', 3),
('Hotel Four', '4 Fourth Street', 'Mô tả khách sạn 4', 4),
('Hotel Five', '5 Fifth Street', 'Mô tả khách sạn 5', 5),
('Hotel Six', '6 Sixth Street', 'Mô tả khách sạn 6', 1),
('Hotel Seven', '7 Seventh Street', 'Mô tả khách sạn 7', 2),
('Hotel Eight', '8 Eighth Street', 'Mô tả khách sạn 8', 3),
('Hotel Nine', '9 Ninth Street', 'Mô tả khách sạn 9', 4),
('Hotel Ten', '10 Tenth Street', 'Mô tả khách sạn 10', 5),
('Hotel 11', '6 Sixth Street', 'Mô tả khách sạn 6', 1),
('Hotel 12', '7 Seventh Street', 'Mô tả khách sạn 7', 2),
('Hotel 13', '8 Eighth Street', 'Mô tả khách sạn 8', 3),
('Hotel 14', '9 Ninth Street', 'Mô tả khách sạn 9', 4),
('Hotel 15', '10 Tenth Street', 'Mô tả khách sạn 10', 5);


