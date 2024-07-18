import express from 'express';
import { editUser, getCurrentUser, login, signup, searchUser } from '../controllers/users.js';
import { loginValidator, signupValidator, validate } from '../middlewares/validator.js';
import authMiddleware from '../middlewares/auth.js';
import { singleAvatar } from '../middlewares/multer.js';

const router = express.Router();

// Login
router.post('/login', loginValidator, validate, login);

// Signup
router.post('/signup', signupValidator, validate, signup);

// Get Current User (Protected Route)
router.get('/me', authMiddleware, getCurrentUser);

// Search User (Protected Route)
router.get('/search', authMiddleware, searchUser);

// Edit User (Protected Route)
router.put('/edit', authMiddleware,singleAvatar, editUser);

export default router;
