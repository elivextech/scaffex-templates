import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))
app.use(cookieParser())


// Import Routes
// Import Your Routes Here - import xyzRoutes from './modules/....'


// Routes Declatration
// Declare Your Routes Here - app.use("/api/v1/....")


app.get("/", (req, res) => {
    res.send("API Running 🚀\n Created By Scaffex By Elivex");
});

export {app}