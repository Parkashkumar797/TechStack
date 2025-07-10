import express from "express"
import connectDB from "./config/db.js";
import router from "./routes/userRoute.js";
import cookieParser from 'cookie-parser';
import multer from "multer";
import path from "path";
// import auth from "./middleware/authMiddleware.js";
const app = express();
const PORT = 5000;
app.set("view engine", "ejs")
connectDB();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use('/api/user', router)
// app.use(auth);
app.get("/", (req, res) => {
    res.send("API Working Successfully ")
})
// for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./upload")
    },
    filename: (req, file, cb) => {
        const newfilename = Date.now() + path.extname(file.originalname)
        cb(null, newfilename)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true)
    }
    else {
    cb(new Error("Resume should be in pdf format"), false)
}
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
})
app.get("/upload", (req, res) => {
    res.render("fileupload")
})
app.post("/upload", upload.single('image'), (req, res) => {
    res.send(req.file)
})


app.listen(PORT, console.log(`server has startes successfully at port ${PORT}`)
)