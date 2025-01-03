const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '',            // by default: '1.0.0'
    title: 'Expense Tracker API',              // by default: 'REST API'
    description: 'API documentation'         // by default: ''
  },
  host: 'localhost: 5000',                 // by default: 'localhost:3000'
  basePath: '',             // by default: '/'
  schemes: [],              // by default: ['http']
  consumes: [],             // by default: ['application/json']
  produces: [],
  securityDefinitions: {},  // by default: empty object
  definitions: {}           // by default: empty object
};

const outputFile = './swagger-output.json';
const routes = ['./routes/transactions.route.js', './routes/users.route.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);