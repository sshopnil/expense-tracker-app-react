//essential includes
const express = require('express');
const cors = require('cors');

const app = express();

//other includes
const {connectDB} = require('./database/db_connect');
const transactionRouter = require('./routes/transactions.route');
const userRouter = require('./routes/users.route');

//configurations
require('dotenv').config();
const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/transaction', transactionRouter);
app.use('/user', userRouter);

const server = () =>{
    connectDB();
    app.listen(5000, () => {
        console.log(`Server is running on port ${PORT}`);
      }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.error(`Port ${PORT} is already in use.`);
        } else {
          console.error(err);
        }
      });
}
server();


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


