const categoryService = require('../services/category.service');

const createNewCategory = async (req, res) => {
  const response = await categoryService.createNewCategory(req.body);
  res.status(201).json(response);
};

const getAllCategories = async (_req, res) => {
  const response = await categoryService.getAllCategories();
  res.status(200).json(response);
};

module.exports = {
  createNewCategory,
  getAllCategories,
};