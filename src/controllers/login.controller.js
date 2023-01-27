require('dotenv/config');
const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'mytoken';

const isBodyValid = (username, password) => username && password;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    const user = await UserService.getByCredentials(email, password);
    console.log('Retorno do getByCredentials:', user);
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    /* Aqui é quando assinamos de fato nossa mensagem com a nossa "chave secreta".
      Mensagem essa que contém dados do seu usuário e/ou demais dados que você
      quiser colocar dentro de "data".
      O resultado dessa função será equivalente a algo como: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJ1c2VybmFtZSI6Iml0YWxzc29kaiIsInBhc3N3b3JkIjoic2VuaGExMjMifSwiaWF0IjoxNjM4OTc1MTMyLCJleHAiOjE2Mzk1Nzk5MzJ9.hnpmu2p61Il8wdQfmUiJ7wiWXgw8UuioOU_D2RnB9kY */
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    /* Por fim, nós devolvemos essa informação ao usuário. */
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500);
  }
};

module.exports = {
  login,
};