const express = require('express');
const router = express.Router();

const hotelsController = require('../controllers/hotels');

/**
 * @openapi
 * /hotels:
 *   get:
 *     summary: Retrieve a list of hotels
 *     responses:
 *       200:
 *         description: A list of hotels
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
 *                     example: Hotel Sunshine
 *                   address: 
 *                     type: string
 *                     example: 23 ABC
 *                   description:                     
 *                     type: string
 *                     example: This is a lovely hotel
 *                   owner_id:        
 *                     type: interger
 *                     example: 1
 *       400:
 *          description: Bad request
 *                     
 */
 router.get('/', hotelsController.getAllHotels);

 module.exports = router;