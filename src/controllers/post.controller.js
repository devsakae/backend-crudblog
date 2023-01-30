const postService = require('../services/post.service');
const mock = { code: 200, message: { response: "Sou um mock" } };

const createNewPost = async (req, res) => {
  const { body: { title, content, categoryIds }, user: { id } } = req;
  const postPack = { title, content, categoryIds, userId: id };
  const { code, message } = await postService.createNewPost(postPack);
  if (!code) return res.status(500).json({ message });
  res.status(code).json(message);
};

const getAllPosts = async (_req, res) => {
  const { code, message } = await postService.getAllPosts();
  res.status(code).json(message);
};

module.exports = {
  createNewPost,
  getAllPosts,
};