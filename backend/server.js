import express from "express"
import connectDB  from "./config/db.js";
import session from "express-session";
import router from "./routes/userRoute.js";
const app= express();
const PORT = 5000;
app.set("view engine","ejs")
connectDB();
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret:"parkashkumar",
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:1000*60}
}))
app.use('/',router)
// route
app.get("/",(req,res)=>{
    res.send("API Working Successfully ")
})
// app.get("/setUser",(req,res)=>{
//     req.session.username="parkash"
//     res.send("username has been set in session")
// })
// app.get("/getUser",(req,res)=>{
// if(req.session.username){
//     res.send(`session name is ${req.session.username}`)
// }else{
//     res.send("username is not set")
// }
//     res.send("username has been set in session")
// })
app.listen (PORT,console.log(`server has startes successfully at port ${PORT}`)
)