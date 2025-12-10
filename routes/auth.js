// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Register
router.post('/register', async (req, res) => {
  const { email, password, username } = req.body;
  console.log('Incoming registration:', email);

  try {
    const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      console.log('Email already exists');
      return res.status(400).json({ message: 'Email already exists' });
    }

    await db.query('INSERT INTO users (email, password, username) VALUES (?, ?, ?)', [email, password, username]);
    console.log('User registered successfully');
    res.status(200).json({ message: 'Registered successfully' });
  } catch (err) {
    console.error('Registration error:', err); // 👈 This will show the actual error
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [user] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [username, password]);
    if (user.length === 0) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;