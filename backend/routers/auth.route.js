// creating all auth routes
import express from 'express';
import { signin, logout, signup } from '../controllers/auth.controller.js';
const router = express.Router();
// signup route
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);

// exporting routes
export default router;