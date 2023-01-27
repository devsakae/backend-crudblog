const { User } = require('../models');

const verifyUserEmail = async (email) => {
  const response = await User.findOne({ where: { email } });
  return response;
};

const getByCredentials = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

module.exports = {
  getByCredentials,
  verifyUserEmail,
  getById,
};