// routes/ratingRoutes.js
const express = require('express');
const router = express.Router();
const {authMiddleware} = require('../middleware/authMiddleware');
const ratingController = require('../controllers/ratingController');

// Add a rating
router.post('/add', authMiddleware, ratingController.addRating);

// Get ratings for a specific entity (service or provider)
router.get('/:entityType/:entityId', ratingController.getRatings);

module.exports = router;
