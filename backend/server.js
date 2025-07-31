import express from "express"
import connectDB from "./config/db.js";
import router from "./routes/userRoute.js";
import cookieParser from 'cookie-parser';
import jobRouter from "./routes/jobRoutes.js";
import path from "path";
import cors from "cors"
// import auth from "./middleware/authMiddleware.js";
const app = express();
const PORT = 5000;
app.set("view engine", "ejs")
connectDB();
// middlewares
    app.use(cors({
  origin: "http://localhost:5173",
  credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use('/api/user', router)
app.use("/api/job",jobRouter)
app.use('/images', express.static('Upload'))
app.get("/", (req, res) => {res.send("API Working Successfully ")})

app.listen(PORT, console.log(`server has startes successfully at port ${PORT}`)
)