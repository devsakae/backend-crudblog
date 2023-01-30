const express = require('express');

const loginController = require('./controllers/login.controller');
const adminController = require('./controllers/admin.controller');
const categoryController = require('./controllers/category.controller');
const postController = require('./controllers/post.controller');

const { validateToken } = require('./middlewares/validateToken');
const validateDisplayName = require('./middlewares/displayName');
const validatePassword = require('./middlewares/password');
const validateUser = require('./middlewares/user');
const validateName = require('./middlewares/name');
const validatePost = require('./middlewares/postControl');

const app = express();

app.use(express.json());

// ...
app.post('/login', loginController.login);
app.post('/user',
  validateDisplayName,
  validatePassword,
  validateUser,
  adminController.createNewUser);

app.get('/user',
  validateToken,
  adminController.getAllUsers);

app.get('/user/:id',
  validateToken,
  adminController.getUserById);

app.post('/categories',
  validateToken,
  validateName,
  categoryController.createNewCategory);

app.get('/categories',
  validateToken,
  categoryController.getAllCategories);

app.post('/post',
  validateToken,
  validatePost,
  postController.createNewPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
