const express = require('express');
const loginController = require('./controllers/login.controller');
const adminController = require('./controllers/admin.controller');
const validateDisplayName = require('./middlewares/displayName');
const validatePassword = require('./middlewares/password');
const validateUser = require('./middlewares/user');
const { validateToken } = require('./middlewares/validateToken');

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

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
