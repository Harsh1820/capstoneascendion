// const Service = require('../models/Service');

// // Get all services
// exports.getAllServices = async (req, res) => {
//     try {
//         const services = await Service.find().populate('category providers');
//         res.status(200).json(services);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching services' });
//     }
// };

// // Get services by category
// exports.getServicesByCategory = async (req, res) => {
//     const { categoryId } = req.params;
//     try {
//         const services = await Service.find({ category: categoryId }).populate('category providers');
//         res.status(200).json(services);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching services by category' });
//     }
// };

// // Create a new service
// exports.createService = async (req, res) => {
//     const { name, description, price, category, providers } = req.body;
//     try {
//         const newService = new Service({ name, description, price, category, providers });
//         await newService.save();
//         res.status(201).json(newService);
//     } catch (error) {
//         res.status(500).json({ error: 'Error creating service' });
//     }
// };

// // Delete a service
// exports.deleteService = async (req, res) => {
//     const { id } = req.params;
//     try {
//         await Service.findByIdAndDelete(id);
//         res.status(200).json({ message: 'Service deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error deleting service' });
//     }
// };


const { body, param, validationResult } = require('express-validator');
const Service = require('../models/Service');

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find().populate('category providers');
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching services' });
    }
};

// Get services by category
exports.getServicesByCategory = [
    param('categoryId').notEmpty().withMessage('Category ID is required'),

    async (req, res) => {
        const { categoryId } = req.params;
        try {
            const services = await Service.find({ category: categoryId }).populate('category providers');
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching services by category' });
        }
    }
];

// Create a new service
exports.createService = [
    body('name').notEmpty().withMessage('Service name is required'),
    body('description').optional().isString().withMessage('Description must be a string'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('category').notEmpty().withMessage('Category ID is required'),
    body('providers').isArray().withMessage('Providers must be an array of IDs'),

    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description, price, category, providers } = req.body;
        try {
            const newService = new Service({ name, description, price, category, providers });
            await newService.save();
            res.status(201).json(newService);
        } catch (error) {
            res.status(500).json({ error: 'Error creating service' });
        }
    }
];

// Delete a service
exports.deleteService = [
    param('id').notEmpty().withMessage('Service ID is required'),

    async (req, res) => {
        const { id } = req.params;
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await Service.findByIdAndDelete(id);
            res.status(200).json({ message: 'Service deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error deleting service' });
        }
    }
];
