require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const basicAuth = require('express-basic-auth');


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Hotel System',
      version: '1.0.0',
      description: 'This is a api for my hotel system',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'],
};
const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use(
    '/docs',
    basicAuth({
      users: { 'admin': 'admin123' }, // Change username and password as needed
      challenge: true,
      realm: 'Swagger API docs',
    }),
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );
};

module.exports = swaggerDocs;
