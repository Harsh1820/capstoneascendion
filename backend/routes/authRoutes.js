// // // routes/authRoutes.js
// // const express = require('express');
// // const router = express.Router();
// // const authController = require('../controllers/authController');

// // // POST requests for registration and login
// // router.post('/register', authController.register);
// // router.post('/login', authController.login);

// // // GET requests (for testing only)
// // router.get('/register', authController.getRegistration);
// // router.get('/login', authController.getLogin);

// // module.exports = router;

// // routes/authRoutes.js

// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // POST requests for registration and login
// router.post('/register', authController.register);
// router.post('/login', authController.login);

// // GET request to fetch all users
// router.get('/users', authController.getAllUsers);

// module.exports = router;


const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', authController.register);
router.post('/login', authController.login);

// Admin-only route to get all users
router.get('/users', authController.getAllUsers);

module.exports = router;

