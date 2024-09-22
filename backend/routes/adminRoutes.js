const express = require('express');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// Only admins can access this route
router.post('/create-category', authMiddleware, adminMiddleware, (req, res) => {
  // Logic to create category
  res.status(200).json({ message: 'Category created successfully' });
});

module.exports = router;
