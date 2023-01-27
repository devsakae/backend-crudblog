const jwt = require('jsonwebtoken');
require('dotenv/config');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'mytoken';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    /*
      A variável decoded será um objeto equivalente ao seguinte:
      {
        data: {
          userId: 1
        },
        iat: 1656616422,
        exp: 1657221222
      }
    */
    const user = await userService.getById(decoded.data.userId);
    console.log('User:', user);

    /* Não existe um usuário na nossa base com o id informado no token. */
    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    /* O usuário existe! Colocamos ele em um campo no objeto req.
       Dessa forma, o usuário estará disponível para outros middlewares que
       executem em sequência */
    req.userLoggedIn = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};