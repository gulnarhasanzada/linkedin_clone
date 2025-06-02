import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) =>{
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) return res.status(400).json({error: "Invalid email or password!"});
        const isValid = await bcrypt.compare(password, user.password);

        if(!isValid) return res.status(400).json({error: "Invalid email or password!"});

        const token = jwt.sign({email, firstName: user.firstName, lastName: user.lastName}, process.env.JWT_SECRET)
        res.status(200).json({user, token: "Bearer " + token})
    }catch(err){
        res.status(500).json({message: "Login failed", error: err.message})
    }
}


export const register = async (req, res) => {
     try{
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(user) return res.status(400).json({error: `Email ${email} already exists!`});

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({email, password: hashPassword});
        return res.status(201).json({
            message: "User created successfully!",
            user: newUser
        })
     }catch(err){
        res.status(500).json({message: "Register failed", error: err.message})
     }
}