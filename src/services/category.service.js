const { Category } = require('../models');

const createNewCategory = async ({ name }) => {
  const response = await Category.create({ name });
  console.log(response);
  return response;
};

module.exports = {
  createNewCategory,
};