import { check, validationResult } from 'express-validator';
import { User } from '../models/user.js';

// Login Validator
export const loginValidator = [
  check('username', 'Please include a valid username').exists(),
  check('password', 'Password is required').exists()
];

// Signup Validator
export const signupValidator = [
  check('username', 'userName is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  check('email').custom(async (value) => {
    const user = await User.findOne({ email: value });
    if (user) {
      throw new Error('Email already in use');
    }
  })
];

// Middleware to handle validation results
export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
