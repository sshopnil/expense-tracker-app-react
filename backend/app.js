//essential includes
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

//other includes
import connectDB from './database/db_connect.js';


dotenv.config();

const port = process.env.PORT;


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
});

const server = () =>{
    connectDB();
    app.listen(port, () => {
        console.log(`Backend app listening on port ${port}`)
    });
}
server();


