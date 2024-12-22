//essential includes
const express = require('express');
const cors = require('cors');

const app = express();

//other includes
const connectDB = require('./database/db_connect');
const transactionRouter = require('./routes/transactions.route');


//configurations
require('dotenv').config();
const PORT = process.env.PORT || 5001;

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/transaction', transactionRouter);

const server = () =>{
    connectDB();
    app.listen(5002, () => {
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


