import express from "express"
import connectDB  from "./config/db.js";
import userModel from "./models/userModel.js";
const app= express();
const PORT = 5000;
connectDB();
app.get("/",(req,res)=>{
    res.send("API Working Successfully ")
})
app.listen (PORT,console.log(`server has startes successfully at port ${PORT}`)
)