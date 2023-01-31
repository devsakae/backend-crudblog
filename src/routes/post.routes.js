const express = require('express');
const postController = require('../controllers/post.controller');

const validatePost = require('../middlewares/postControl');
const validateCategoryIds = require('../middlewares/categoryIds');

const router = express.Router();

router.get('/search', postController.searchPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPosts);
router.post('/', validatePost, validateCategoryIds, postController.createNewPost);
router.put('/:id', validatePost, postController.editPost);
router.delete('/:id', postController.deletePost);

module.exports = router;