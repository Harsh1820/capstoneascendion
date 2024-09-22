// routes/userRoutes.js
const express = require('express');
const { registerProvider, registerConsumer, getUserById } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Register routes
router.post('/register/provider', registerProvider);
router.post('/register/consumer', registerConsumer);

// User retrieval
router.get('/:id', protect, getUserById); // Requires authentication

module.exports = router;
