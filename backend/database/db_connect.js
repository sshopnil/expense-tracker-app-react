const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URL

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
  try {
    // Connect to MongoDB
    const connection = await mongoose.connect(uri, clientOptions);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
}
module.exports = {connectDB};
