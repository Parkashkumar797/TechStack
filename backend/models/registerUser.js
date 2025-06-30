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
    }
})
const registerUsers=mongoose.model("reisteruser",register)
export default registerUsers;