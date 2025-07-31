import mongoose from "mongoose";
const jobSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    resume:{type:String,required:true}
})
const jobModel =mongoose.model("applied",jobSchema)
export default jobModel;