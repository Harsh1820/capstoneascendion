// controllers/userController.js
const User = require('../models/User');

// Service Provider Registration
exports.registerProvider = async (req, res) => {
  const { name, email, password, services } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const user = new User({
      name,
      email,
      password,
      role: 'provider',
      services,
    });

    await user.save();
    res.status(201).json({ message: 'Service Provider registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Consumer Registration
exports.registerConsumer = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const user = new User({
      name,
      email,
      password,
      role: 'consumer',
    });

    await user.save();
    res.status(201).json({ message: 'Consumer registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
