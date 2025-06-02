import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port", process.env.PORT);
    })
}).catch((err)=>{
    console.error('MongoDB connection error:', err);
})




