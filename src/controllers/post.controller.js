const postService = require('../services/post.service');

const createNewPost = async (req, res) => {
  const { body: { title, content, categoryIds }, user: { id } } = req;
  const postPack = { title, content, categoryIds, userId: id };
  const { code, message } = await postService.createNewPost(postPack);
  if (!code) return res.status(500).json({ message });
  res.status(code).json(message);
};

const getPosts = async (req, res) => {
  const { code, message } = await postService.getPosts(req);
  res.status(code).json(message);
};

const editPost = async (req, res) => {
  const { params, user, body } = req;
  const { code, message } = await postService.editPost(params, user, body);
  res.status(code).json(message);
};

const deletePost = async (req, res) => {
  const { params, user } = req;
  const { code, message } = await postService.getPosts(req);
  if (code === 404) { return res.status(code).json(message); }
  if (message.userId !== user.id) { return res.status(401).json({ message: 'Unauthorized user' }); }
  const response = await postService.deletePost(params, user);
  res.status(response.code).end();
};

module.exports = {
  createNewPost,
  getPosts,
  editPost,
  deletePost,
};