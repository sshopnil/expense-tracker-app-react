import mongoose from "mongoose";

const connectDB = async ()=> {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully connected to MongoDB!");
  }
  catch(e){
    console.log('DB connection error');
  } 
  finally {
    await mongoose.disconnect();
  }
}
export default connectDB;
