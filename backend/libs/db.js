import mongoose from "mongoose";
const connectDB = async()=>{
    try {
        mongoose.connect(process.env.Mongodb_URL)
        console.log('mongodb is connected');
        
    } catch (error) {
        console.log('mongodb connection error');
        
    }
}
export default connectDB;