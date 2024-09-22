// // controllers/categoryController.js
// const Category = require('../models/Category');

// // Admin can add a category
// exports.addCategory = async (req, res) => {
//   try {
//     if (!req.user.isAdmin) return res.status(403).json({ message: 'Access denied' });
    
//     const category = new Category(req.body);
//     await category.save();
//     res.status(201).json({ message: 'Category added successfully', category });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get all categories
// exports.getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.status(200).json(categories);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


const Category = require('../models/Category');
const { body, validationResult } = require('express-validator');

// Admin can add a category
exports.addCategory = [
  // Validation rules
  body('name').notEmpty().withMessage('Category name is required'),
  body('description').optional().isString().withMessage('Description must be a string'),

  // Controller logic
  async (req, res) => {
    // Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      if (!req.user.isAdmin) return res.status(403).json({ message: 'Access denied' });
      
      const category = new Category(req.body);
      await category.save();
      res.status(201).json({ message: 'Category added successfully', category });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
