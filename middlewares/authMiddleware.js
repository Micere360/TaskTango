const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/authConfig'); // Create a file for authentication configurations

// Middleware to verify JWT and authenticate users
const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = { authenticateUser };

