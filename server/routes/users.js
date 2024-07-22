import express from "express";
import {
  editUser,
  getCurrentUser,
  login,
  signup,
  searchUser,
  sendFriendRequest,
  acceptFriendRequest,
  getMyNotifications,
  getMyFriends,
} from "../controllers/users.js";
import {
  loginValidator,
  signupValidator,
  validate,
  acceptRequestValidator,
  sendRequestValidator,
  validateHandler,
} from "../lib/validators.js";
import authMiddleware from "../middlewares/auth.js";
import { singleAvatar } from "../middlewares/multer.js";

const app = express.Router();

// Login
app.post("/login", loginValidator, validate, login);

// Signup
app.post("/signup", signupValidator, validate, signup);

// Get Current User (Protected Route)
app.get("/me", authMiddleware, getCurrentUser);

// Edit User (Protected Route)
app.put("/edit", authMiddleware, singleAvatar, editUser);

// Search User (Protected Route)
app.get("/search", authMiddleware, searchUser);

app.put(
  "/sendrequest",
  authMiddleware,
  sendRequestValidator(),
  validateHandler,
  sendFriendRequest
);

app.put(
  "/acceptrequest",
  authMiddleware,
  acceptRequestValidator(),
  validateHandler,
  acceptFriendRequest
);

app.get("/notifications", authMiddleware, getMyNotifications);

app.get("/friends", authMiddleware, getMyFriends);

export default app;
