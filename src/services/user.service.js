const { User } = require('../models');

const getByCredentials = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = {
  getByCredentials,
};