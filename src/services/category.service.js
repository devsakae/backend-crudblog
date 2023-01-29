const { Category } = require('../models');

const createNewCategory = async ({ name }) => {
  const response = await Category.create({ name });
  return response;
};

const getAllCategories = async () => {
  const response = await Category.findAll();
  return response;
};

module.exports = {
  createNewCategory,
  getAllCategories,
};