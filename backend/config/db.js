import mongoose from "mongoose";
const connectDB = () => {

    mongoose.connect(process.env.MONGO_URL, { 
        dbName: 'TalentStack' 
    })
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully!");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
}

export default connectDB;