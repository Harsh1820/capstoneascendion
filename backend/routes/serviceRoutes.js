// const express = require('express');
// const router = express.Router();
// const serviceController = require('../controllers/serviceController');
// const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have middleware for auth and admin

// // Public Routes
// router.get('/', serviceController.getAllServices); // Get all services
// router.get('/category/:categoryId', serviceController.getServicesByCategory); // Get services by category

// // Admin-only Routes (use authMiddleware to check if user is admin)
// router.post('/add', authMiddleware, serviceController.addService); // Add a new service
// router.put('/update/:id', authMiddleware, serviceController.updateService); // Update a service
// router.delete('/delete/:id', authMiddleware, serviceController.deleteService); // Delete a service

// module.exports = router;

const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const {authMiddleware} = require('../middleware/authMiddleware');

// Route to get all services
router.get('/', serviceController.getAllServices);
 
// Route to get services by category
router.get('/category/:categoryId', serviceController.getServicesByCategory);

// Route to add a new service
router.post('/add',authMiddleware, serviceController.createService);

// Route to delete a service
router.delete('/:id',authMiddleware, serviceController.deleteService);

module.exports = router;
