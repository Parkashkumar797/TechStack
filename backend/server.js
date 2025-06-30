import express from "express"
import connectDB  from "./config/db.js";
import userModel from "./models/userModel.js";

import router from "./routes/userRoute.js";
const app= express();
const PORT = 5000;
app.set("view engine","ejs")
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/',router)
app.get("/",(req,res)=>{
    res.send("API Working Successfully ")
})
app.listen (PORT,console.log(`server has startes successfully at port ${PORT}`)
)