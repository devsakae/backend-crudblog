const express = require('express');

const postRoute = require('./routes/post.routes');
const categoryRoute = require('./routes/category.routes');

const loginController = require('./controllers/login.controller');
const adminController = require('./controllers/admin.controller');

const { validateToken } = require('./middlewares/validateToken');
const validateDisplayName = require('./middlewares/displayName');
const validatePassword = require('./middlewares/password');
const validateUser = require('./middlewares/user');

const app = express();

app.use(express.json());

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

app.delete('/user/me',
  validateToken,
  loginController.deleteMe);

app.use('/categories', validateToken, categoryRoute);
app.use('/post', validateToken, postRoute);

module.exports = app;
