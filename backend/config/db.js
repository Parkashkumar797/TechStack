import mongoose from "mongoose";
const connectDB=()=>{mongoose.connect("mongodb://127.0.0.1:27017/TechStack")
.then(()=>{
    console.log("Database successfullly connected");
    
}).catch((err)=>{
    console.log("something went wrong,err");
    
})
}
export default connectDB;