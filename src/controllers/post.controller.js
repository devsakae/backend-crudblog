const postService = require('../services/post.service');

const createNewPost = async (req, res) => {
  const { body: { title, content, categoryIds }, user: { id } } = req;
  const postPack = { title, content, categoryIds, userId: id };
  const { code, message } = await postService.createNewPost(postPack);
  if (!code) return res.status(500).json({ message });
  res.status(code).json(message);
};

module.exports = {
  createNewPost,
};