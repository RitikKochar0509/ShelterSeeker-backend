const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Regular expression for email validation
const emailValidator = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// Signup
router.post('/signup', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  if (!emailValidator.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    } else {
      const user = new User({ email });
      await user.save();

      return res.status(200).json({ message: 'Signup successful!' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error signing up.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  if (!emailValidator.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ message: 'Email not found.' });
    } else {
      return res.status(200).json({ message: 'Login successful!' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error logging in.' });
  }
});

module.exports = router;
