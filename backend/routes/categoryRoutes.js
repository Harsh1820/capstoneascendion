  // routes/categoryRoutes.js
  const express = require('express');
  const router = express.Router();
  const categoryController = require('../controllers/categoryController');
  const { authMiddleware } = require('../middleware/authMiddleware');


  // Admin can add a category
  router.post('/add', authMiddleware, categoryController.addCategory);

  // Get all categories
  router.get('/', categoryController.getCategories);

  module.exports = router;
