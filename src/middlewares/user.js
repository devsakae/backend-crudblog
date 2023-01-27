const userService = require('../services/user.service');

module.exports = async (req, res, next) => {
  const regex = /\S+@\S+/g;
  if (req.body.email) {
    if (!regex.test(req.body.email)) {
      return res.status(400).json({ message: '"email" must be a valid email' });
    }
    const verifyEmail = await userService.verifyUserEmail(req.body.email);
    if (verifyEmail) return res.status(409).json({ message: 'User already registered' });
  }
  next();
};