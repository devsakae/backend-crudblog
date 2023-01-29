const categoryService = require('../services/category.service');

const createNewCategory = async (req, res) => {
  const response = await categoryService.createNewCategory(req.body);
  res.status(201).json(response);
};

module.exports = {
  createNewCategory,
};