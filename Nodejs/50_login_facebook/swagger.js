require('dotenv').config();
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const basicAuth = require('express-basic-auth');


const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API Documentation for Google login with JWT',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./app.js', './routes/protected.js'], // Đường dẫn tới các file chứa các endpoint của bạn
};
const specs = swaggerJsdoc(swaggerOptions);

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
