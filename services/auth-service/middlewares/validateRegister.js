import {body,  validationResult} from "express-validator";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
 
const validateRegister = [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").matches(passwordRegex).withMessage("Password must be at least 8 characters long, include uppercase, lowercase, number, and special character."),
    (req, res, next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
        next();
    }
]

export default validateRegister;