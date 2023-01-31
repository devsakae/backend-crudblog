const { Op } = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../models');

// Colocar para atomizar e criar segurança
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
    await PostCategory.bulkCreate(bulking);
    return { code: 201, message: response };
  } catch (err) {
    return { code: 500, message: err.message };
  }
};

const getPosts = async (req) => {
  try {
    const allPosts = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
    if (req.params.id) {
      const { id } = req.params;
      const specificPost = await allPosts.find((post) => +post.id === +id);
      if (!specificPost) { return { code: 404, message: { message: 'Post does not exist' } }; }
      return { code: 200, message: specificPost };
    }
    return { code: 200, message: allPosts };
  } catch (err) {
    return { code: 500, message: err.message };
  }
};

const editPost = async ({ id }, user, { title, content }) => {
  const response = await BlogPost.update(
    { title, content },
    { where: { id, userId: { [Op.eq]: user.id } } },
  );
  if (response[0] === 0) { return { code: 401, message: { message: 'Unauthorized user' } }; }
  const { message } = await getPosts({ params: { id } });
  return { code: 200, message };
};

const deletePost = async ({ id }, user) => {
  try {
    const response = await BlogPost.destroy({ where: { id, userId: { [Op.eq]: user.id } } });
    if (response[0] === 0) { return { code: 401, message: { message: 'Unauthorized user' } }; }
    return { code: 204 };
  } catch (err) {
    return { code: 500, message: err.message };
  }
};

const searchPost = async ({ q }) => {
  try {
    const response = await BlogPost.findAll({
      where: {
        [Op.or]: {
          title: { [Op.substring]: q },
          content: { [Op.substring]: q },
        }
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });
    return { code: 200, message: response };
  } catch (err) {
    return { code: 500, message: err.message };
  }
};

module.exports = {
  createNewPost,
  getPosts,
  editPost,
  deletePost,
  searchPost,
};