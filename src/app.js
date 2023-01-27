const express = require('express');
const loginController = require('./controllers/login.controller');
const adminController = require('./controllers/admin.controller');
const validateDisplayName = require('./middlewares/displayName');
const validatePassword = require('./middlewares/password');
const validateUser = require('./middlewares/user');
// Não é necessário no requisito 4, mas a partir do 5...
// const validateToken = require('./auth/validaJWT');
// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', loginController.login);
app.post('/user',
  validateDisplayName,
  validatePassword,
  validateUser,
  adminController.createNewUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
