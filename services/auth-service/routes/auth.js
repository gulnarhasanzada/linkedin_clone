import express from "express";
import {login, register} from "../controllers/authController.js";
import validateRegister from "../middlewares/validateRegister.js";

const authRoutes = express.Router();

authRoutes.post("/login", login);
authRoutes.post("/register", validateRegister, register)

export default authRoutes;

