const express = require('express');
const categoryController = require('../controllers/category.controller');
const validateName = require('../middlewares/name');

const router = express.Router();

router.post('/categories', validateName, categoryController.createNewCategory);
router.get('/categories', categoryController.getAllCategories);

module.exports = router;