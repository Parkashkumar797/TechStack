import mongoose from "mongoose";
const register=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        // required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
const registerUsers=mongoose.model("registeruser",register)
export default registerUsers;