const jwt = require('jsonwebtoken');
require('dotenv/config');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'mytoken';

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, secret);
    const user = await userService.getById(decoded.data.userId);
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};