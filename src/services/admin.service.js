const { User } = require('../models');

const createNewUser = async (userPack) => {
  try {
    const newUser = await User.create(userPack);
    return { code: '', message: newUser };
  } catch (err) {
    return { code: 500, message: err.message };
  }
};

const verifyUserEmail = async (email) => {
  const response = await User.verifyUserEmail(email);
  return response;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

const getUserById = async ({ id }) => {
  const userRequested = await User.findByPk(id);
  return userRequested;
};

module.exports = {
  getAllUsers,
  createNewUser,
  verifyUserEmail,
  getUserById,
};