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
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' }); 
    }
    const jwtConfig = {
      expiresIn: '12h',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500);
  }
};

const deleteMe = async (req, res) => {
  const { code, message } = await UserService.deleteMe(req.user);
  return res.status(code).json(message);
};

module.exports = {
  login,
  deleteMe,
};