const express = require("express");
const cors = require("cors");
const connectDB = require("./config/mongodb");
const connectSQL = require("./config/sqldb");
// const authRoutes = require("./routes/authRoutes")
const commentRoutes = require("./routes/commentRoutes")
require("dotenv").config()

const app = express()

app.use(cors());
app.use(express.json());

connectDB();
connectSQL();

app.get("/", (req,res) => {
    res.send("Welcome to API")
})

// app.use("/api/auth", authRoutes)
app.use("/api/comment", commentRoutes)

const PORT = process.env.PORT
app.listen(PORT, ()=> {
    console.log(`Sever is listening at the port ${PORT}`)
})