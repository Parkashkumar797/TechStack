import mongoose from "mongoose";
const applyJobSchema=mongoose.Schema({
    name:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    resume:{
        type:String,
        required:true 
    }
},
{timestamps:true}
)
const applyJobModel=mongoose.model("applications",applyJobSchema)
export default applyJobModel