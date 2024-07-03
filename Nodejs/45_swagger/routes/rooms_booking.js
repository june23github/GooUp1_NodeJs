const express = require('express');
const router = express.Router();

const rooms_bookingController = require('../controllers/rooms_booking');

/**
 * @openapi
 * /rooms/booking:
 *   get:
 *     summary: Retrieve a list of rooms with bookings
 *     responses:
 *       200:
 *         description: A list of rooms with bookings
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Deluxe Room
 *                   area:
 *                     type: number
 *                     example: 30
 *                   floor:
 *                     type: integer
 *                     example: 3
 *                   type:
 *                     type: string
 *                     example: Single
 *                   status:
 *                     type: string
 *                     example: Available
 *                   price:
 *                     type: number
 *                     example: 100
 *                   hotel_id:
 *                     type: number
 *                     example: 1
 *       400:
 *          description: Bad request
 */
router.get('/', rooms_bookingController.getAllRoomsBooking);

/**
 * @openapi
 * /rooms/booking/{id}:
 *   get:
 *     summary: Retrieve a list of rooms booked by a specific user
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user whose bookings are to be retrieved
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: A list of rooms booked by the user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Deluxe Room
 *                   area:
 *                     type: number
 *                     example: 30
 *                   floor:
 *                     type: integer
 *                     example: 3
 *                   type:
 *                     type: string
 *                     example: Single
 *                   status:
 *                     type: string
 *                     example: Available
 *                   price:
 *                     type: number
 *                     example: 100
 *                   hotel_id:
 *                     type: integer
 *                     example: 1
 *       400:
 *          description: Bad request
 */
router.get('/:id', rooms_bookingController.getRoomsBookingOfUser);

module.exports = router;