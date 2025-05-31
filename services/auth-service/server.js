import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log("Server is running on port", process.env.PORT);
    })
}).catch((err)=>{
    console.error('MongoDB connection error:', err);
})




