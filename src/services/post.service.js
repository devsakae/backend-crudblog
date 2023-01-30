const { BlogPost, Category, PostCategory } = require('../models');

// const Sequelize = require('sequelize');
// const config = require('../config/config');
// const env = process.env.NODE_ENV || 'development';
// const sequelize = new Sequelize(config[env]);

const createNewPost = async ({ title, content, categoryIds, userId }) => {
  try {
    const { count, rows } = await Category.findAndCountAll();
    const check = rows.some(({ id }) => !categoryIds.includes(id));
    if (count > categoryIds.length || check) {
      return { code: 400, message: { message: 'one or more "categoryIds" not found' } };
    }
    const response = await BlogPost.create({ title, content, userId });
    const bulking = categoryIds.map((cat) => ({ postId: response.id, categoryId: cat }));
    PostCategory.bulkCreate(bulking);
    return { code: 201, message: response };
  } catch (err) {
    return { code: 500, message: err.message }; 
  }
};

module.exports = {
  createNewPost,
};