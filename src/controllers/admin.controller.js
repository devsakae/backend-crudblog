require('dotenv/config');
const jwt = require('jsonwebtoken');
const adminService = require('../services/admin.service');
// const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'mytoken';

const createNewUser = async (req, res) => {
  try {
    const newUser = await adminService.createNewUser(req.body);
    const jwtConfig = { algorithm: 'HS256' };
    const token = jwt.sign({ data: { userId: newUser.id } }, secret, jwtConfig);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const allUsers = await adminService.getAllUsers();
    // if (allUsers.length < 1) return res.status(500);
    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createNewUser,
  getAllUsers,
};