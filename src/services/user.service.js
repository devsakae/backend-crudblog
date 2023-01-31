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

const deleteMe = async ({ id }) => {
  try {
    const response = await User.destroy({ where: { id } });
    return { code: 204, message: response };
  } catch (err) {
    return { code: 500, message: err.message };
  }
};

module.exports = {
  getByCredentials,
  verifyUserEmail,
  getById,
  deleteMe,
};