// // controllers/ratingController.js
// const Rating = require('../models/Rating');
// const Service = require('../models/Service');
// const User = require('../models/User');

// // Add a rating
// exports.addRating = async (req, res) => {
//   const { rating, comment, entityType, entityId } = req.body;
//   const userId = req.user._id;

//   try {
//     if (!['Service', 'Provider'].includes(entityType)) {
//       return res.status(400).json({ message: 'Invalid entity type' });
//     }

//     // Create a new rating
//     const newRating = new Rating({
//       user: userId,
//       rating,
//       comment,
//       entityType,
//       entityId
//     });

//     await newRating.save();

//     // Update the corresponding service or provider
//     if (entityType === 'Service') {
//       await Service.findByIdAndUpdate(entityId, { $push: { ratings: newRating._id } });
//     } else if (entityType === 'Provider') {
//       await User.findByIdAndUpdate(entityId, { $push: { ratings: newRating._id } });
//     }

//     res.status(201).json(newRating);
//   } catch (error) {
//     res.status(500).json({ error: 'Error adding rating' });
//   }
// };

// // Get ratings for a specific entity (service or provider)
// exports.getRatings = async (req, res) => {
//   const { entityType, entityId } = req.params;

//   try {
//     if (!['Service', 'Provider'].includes(entityType)) {
//       return res.status(400).json({ message: 'Invalid entity type' });
//     }

//     const ratings = await Rating.find({ entityType, entityId }).populate('user');
//     res.status(200).json(ratings);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching ratings' });
//   }
// };


const { body, param, validationResult } = require('express-validator');
const Rating = require('../models/Rating');
const Service = require('../models/Service');
const User = require('../models/User');

// Add a rating
exports.addRating = [
  // Validation rules
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be an integer between 1 and 5'),
  body('comment').optional().isString().withMessage('Comment must be a string'),
  body('entityType').isIn(['Service', 'Provider']).withMessage('Invalid entity type'),
  body('entityId').notEmpty().withMessage('Entity ID is required'),

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { rating, comment, entityType, entityId } = req.body;
    const userId = req.user._id;

    try {
      // Create a new rating
      const newRating = new Rating({
        user: userId,
        rating,
        comment,
        entityType,
        entityId
      });

      await newRating.save();

      // Update the corresponding service or provider
      if (entityType === 'Service') {
        await Service.findByIdAndUpdate(entityId, { $push: { ratings: newRating._id } });
      } else if (entityType === 'Provider') {
        await User.findByIdAndUpdate(entityId, { $push: { ratings: newRating._id } });
      }

      res.status(201).json(newRating);
    } catch (error) {
      res.status(500).json({ error: 'Error adding rating' });
    }
  }
];

// Get ratings for a specific entity (service or provider)
exports.getRatings = [
  // Validation rules
  param('entityType').isIn(['Service', 'Provider']).withMessage('Invalid entity type'),
  param('entityId').notEmpty().withMessage('Entity ID is required'),

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { entityType, entityId } = req.params;

    try {
      const ratings = await Rating.find({ entityType, entityId }).populate('user');
      res.status(200).json(ratings);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching ratings' });
    }
  }
];
