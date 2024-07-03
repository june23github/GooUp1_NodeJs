const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews')

/**
 * @openapi
 * /reviews/{id}:
 *   get:
 *     summary: Retrieve reviews for a user
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user whose reviews are to be retrieved
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: A list of reviews by the user
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
 *                   rating:
 *                     type: integer
 *                     example: 5
 *                   comment:
 *                     type: string
 *                     example: Great stay!
 *                   review_date:
 *                     type: string
 *                     format: date
 *                     example: 2024-07-03
 *                   user_id:
 *                     type: integer
 *                     example: 1
 *                   hotel_id:
 *                     type: integer
 *                     example: 1
 *       400:
 *          description: Bad request
 */
router.get('/', reviewsController.getReviewsOfUser);

module.exports = router;