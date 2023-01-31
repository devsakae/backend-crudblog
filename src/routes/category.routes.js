const express = require('express');
const categoryController = require('../controllers/category.controller');
const validateName = require('../middlewares/name');

const router = express.Router();

router.get('/', categoryController.getAllCategories);
router.post('/', validateName, categoryController.createNewCategory);

module.exports = router;