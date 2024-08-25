import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { getMessage, sendMessage } from '../controllers/message.controller.js';

const router = express.Router();

// defining routes for messages
router.post('/send/:id', protectRoute ,sendMessage)
// get messages between two users
router.get('/:id', protectRoute , getMessage)

export default router;