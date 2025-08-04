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
    verifyOtp:{
        type:String,
        default:""
    },
    verifyOtpExpireAt:{
        type:Number,
        default:0
    },
    isAccountVerified:{
type:Boolean,
default:false
    },
    resetOtp:{
type:String,
default:''
    },
    resetOtpExpireAt:{
        type:Number,
        default:0
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