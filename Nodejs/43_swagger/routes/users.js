const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users')

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     responses:
 *       200:
 *         description: A list of users
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
 *                     example: 1
 *                     type: Linh
 *                   phone:
 *                     type: string
 *                     example: 070xxx3656
 *                   address: 
 *                     type: string
 *                     example: 23 ABC
 *                   email:                     
 *                     type: string
 *                     example: abc@gmail.com
 *                   password:        
 *                     type: string
 *                     example: 123xxxABC
 *       400:
 *          description: Bad request
 */
router.get('/', usersController.getAllUsers);

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the user to retrieve
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: User details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                    type: integer
 *                    example: 1
 *                 name:
 *                    example: 1
 *                    type: Linh
 *                 phone:
 *                    type: string
 *                    example: 070xxx3656
 *                 address: 
 *                    type: string
 *                    example: 23 ABC
 *                 email:                     
 *                    type: string
 *                    example: abc@gmail.com
 *                 password:        
 *                    type: string
 *                    example: 123xxxABC
 *       400:
 *          description: Bad request
 * 
 * 
 */
router.get('/:id', usersController.getUserByid);


module.exports = router;