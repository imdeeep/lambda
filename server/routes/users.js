import express from "express";
import { editUser, getCurrentUser, login, signup,searchUser } from "../controllers/users.js";
import { loginValidator, signupValidator, validate } from "../middlewares/validator.js";
const app = express.Router();

// Login
app.post("/login",loginValidator,validate,login);

// Signup
app.post("/signup",signupValidator,validate,signup)

// Get Current User 
app.get("/me",getCurrentUser)

// Search User 
app.get("/search",searchUser)

// Edit User
app.put("/edit",editUser)

export default app;