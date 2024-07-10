USE gooup1_mysql;

-- Thêm dữ liệu vào bảng users
INSERT INTO users (name, phone, address, email, password) VALUES
('Nguyen Van A', '0901234567', '123 Đường ABC, Hà Nội', 'nguyenvana@example.com', 'password123'),
('Le Thi B', '0912345678', '456 Đường DEF, Hồ Chí Minh', 'lethib@example.com', 'password456'),
('Tran Van C', '0923456789', '789 Đường GHI, Đà Nẵng', 'tranvanc@example.com', 'password789'),
('Phan Thi D', '0934567890', '321 Đường JKL, Hà Nội', 'phanthid@example.com', 'password012'),
('Hoang Van E', '0945678901', '654 Đường MNO, Hồ Chí Minh', 'hoangvane@example.com', 'password345'),
('Nguyen Thi F', '0956789012', '987 Đường PQR, Đà Nẵng', 'nguyenthiF@example.com', 'password678'),
('Tran Van G', '0967890123', '111 Đường STU, Hà Nội', 'tranvang@example.com', 'password910'),
('Le Thi H', '0978901234', '222 Đường VWX, Hồ Chí Minh', 'lethih@example.com', 'password112'),
('Nguyen Van I', '0989012345', '333 Đường YZA, Đà Nẵng', 'nguyenvani@example.com', 'password314'),
('Pham Thi J', '0990123456', '444 Đường BCD, Hà Nội', 'phamthij@example.com', 'password516'),
('Doan Van K', '0912345678', '555 Đường EFG, Hồ Chí Minh', 'doanvank@example.com', 'password718'),
('Le Thi L', '0923456789', '666 Đường HIJ, Đà Nẵng', 'lethil@example.com', 'password920'),
('Tran Van M', '0934567890', '777 Đường KLM, Hà Nội', 'tranvanm@example.com', 'password122'),
('Nguyen Thi N', '0945678901', '888 Đường NOP, Hồ Chí Minh', 'nguyenthin@example.com', 'password324');

-- Thêm dữ liệu vào bảng hotels
INSERT INTO hotels (name, address, description, owner_id) VALUES
('Khách sạn Hoa Sen', '10 Đường XYZ, Hà Nội', 'Khách sạn tiện nghi, gần trung tâm', 1),
('Khách sạn Mùa Xuân', '20 Đường UVW, Hồ Chí Minh', 'Khách sạn với nhiều dịch vụ giải trí', 2),
('Khách sạn Biển Xanh', '30 Đường RST, Đà Nẵng', 'Khách sạn có view biển đẹp', 3),
('Khách sạn Sài Gòn', '40 Đường OPQ, Hồ Chí Minh', 'Khách sạn hiện đại, gần sân bay', 4),
('Khách sạn Hà Nội', '50 Đường LMN, Hà Nội', 'Khách sạn sang trọng, trung tâm thành phố', 5);

-- Thêm dữ liệu vào bảng rooms
INSERT INTO rooms (hotel_id, name, area, floor, type, status, price) VALUES
(1, 'Phòng đơn', 20.5, 1, 'Single', 'Available', 500000),
(1, 'Phòng đôi', 30.0, 2, 'Double', 'Occupied', 800000),
(1, 'Phòng gia đình', 45.0, 3, 'Family', 'Available', 1200000),
(1, 'Phòng VIP', 60.0, 4, 'VIP', 'Available', 2000000),
(2, 'Phòng đơn', 25.5, 1, 'Single', 'Available', 550000),
(2, 'Phòng đôi', 35.0, 2, 'Double', 'Occupied', 850000),
(2, 'Phòng gia đình', 50.0, 3, 'Family', 'Available', 1250000),
(2, 'Phòng VIP', 65.0, 4, 'VIP', 'Available', 2050000),
(3, 'Phòng đơn', 22.0, 1, 'Single', 'Available', 520000),
(3, 'Phòng đôi', 32.0, 2, 'Double', 'Occupied', 820000),
(3, 'Phòng gia đình', 47.0, 3, 'Family', 'Available', 1220000),
(3, 'Phòng VIP', 62.0, 4, 'VIP', 'Available', 2020000),
(4, 'Phòng đơn', 21.5, 1, 'Single', 'Available', 510000),
(4, 'Phòng đôi', 31.0, 2, 'Double', 'Occupied', 810000),
(4, 'Phòng gia đình', 46.0, 3, 'Family', 'Available', 1210000),
(4, 'Phòng VIP', 61.0, 4, 'VIP', 'Available', 2010000),
(5, 'Phòng đơn', 23.5, 1, 'Single', 'Available', 530000),
(5, 'Phòng đôi', 33.0, 2, 'Double', 'Occupied', 830000),
(5, 'Phòng gia đình', 48.0, 3, 'Family', 'Available', 1230000),
(5, 'Phòng VIP', 63.0, 4, 'VIP', 'Available', 2030000);

-- Thêm dữ liệu vào bảng reservations
INSERT INTO reservations (user_id, room_id, checkin_date, checkout_date) VALUES
(6, 1, '2024-07-01', '2024-07-05'),
(7, 3, '2024-07-10', '2024-07-15'),
(8, 5, '2024-07-20', '2024-07-25'),
(9, 7, '2024-08-01', '2024-08-05'),
(10, 9, '2024-08-10', '2024-08-15'),
(11, 11, '2024-08-20', '2024-08-25'),
(12, 13, '2024-09-01', '2024-09-05'),
(13, 15, '2024-09-10', '2024-09-15'),
(14, 17, '2024-09-20', '2024-09-25');
INSERT INTO reservations (user_id, room_id, checkin_date, checkout_date) VALUES
(6, 2, '2024-07-05', '2024-07-10'),
(7, 4, '2024-07-15', '2024-07-20'),
(8, 6, '2024-07-25', '2024-07-30'),
(9, 8, '2024-08-05', '2024-08-10'),
(10, 10, '2024-08-15', '2024-08-20'),
(11, 12, '2024-08-25', '2024-08-30'),
(12, 14, '2024-09-05', '2024-09-10'),
(13, 16, '2024-09-15', '2024-09-20'),
(14, 18, '2024-09-25', '2024-09-30'),
(6, 19, '2024-07-01', '2024-07-03'),
(7, 20, '2024-07-05', '2024-07-08'),
(8, 1, '2024-07-10', '2024-07-13'),
(9, 2, '2024-08-15', '2024-08-18'),
(10, 3, '2024-08-20', '2024-08-23'),
(11, 4, '2024-08-25', '2024-08-28'),
(12, 5, '2024-09-05', '2024-09-08'),
(13, 6, '2024-09-10', '2024-09-13'),
(14, 7, '2024-09-15', '2024-09-18'),
(6, 8, '2024-07-05', '2024-07-08'),
(7, 9, '2024-07-10', '2024-07-13'),
(8, 10, '2024-08-20', '2024-08-23'),
(9, 11, '2024-08-25', '2024-08-28'),
(10, 12, '2024-09-01', '2024-09-04'),
(11, 13, '2024-09-05', '2024-09-08'),
(12, 14, '2024-09-10', '2024-09-13'),
(13, 15, '2024-09-15', '2024-09-18'),
(14, 16, '2024-09-20', '2024-09-23');


-- Thêm dữ liệu vào bảng reviews
INSERT INTO reviews (user_id, hotel_id, rating, comment, review_date) VALUES
(6, 1, 5, 'Khách sạn rất tốt, dịch vụ tuyệt vời!', '2024-07-06'),
(7, 2, 4, 'Phòng sạch sẽ, nhân viên thân thiện.', '2024-07-16'),
(8, 3, 3, 'View đẹp nhưng dịch vụ chưa tốt.', '2024-07-26'),
(9, 4, 5, 'Khách sạn gần sân bay, rất tiện lợi.', '2024-08-06'),
(10, 5, 4, 'Khách sạn đẹp, tiện nghi.', '2024-08-16'),
(11, 1, 3, 'Dịch vụ bình thường, cần cải thiện.', '2024-08-26'),
(12, 2, 5, 'Rất hài lòng với chất lượng dịch vụ.', '2024-09-06'),
(13, 3, 4, 'Khách sạn có view đẹp, phục vụ tốt.', '2024-09-16'),
(14, 4, 3, 'Giá cả hợp lý nhưng dịch vụ chưa tốt.', '2024-09-26');
