import express from "express"
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser';
import jobRoute from "./routes/jobRoute.js";
import path from "path";
import cors from "cors"
import dotenv from 'dotenv'
import authRouter from "./routes/authRoute.js";
import companyRoute from "./routes/companyRoute.js";
import userRoute from "./routes/userRoute.js";
// import auth from "./middleware/authMiddleware.js";
// Load environment variables
dotenv.config()
const app = express();
const PORT = 5000;
app.set("view engine", "ejs")
connectDB();
// middlewares
    app.use(cors({
  origin:[ "http://localhost:5173","http://localhost:5174"],
  credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use('/api/auth', authRouter)
app.use("/api/job",jobRoute)
app.use("/api/company",companyRoute)
app.use("/api/user",userRoute)
app.use('/images', express.static('Upload'))
app.get("/", (req, res) => {res.send("API Working Successfully ")})

app.listen(PORT, console.log(`server has startes successfully at port ${PORT}`)
)