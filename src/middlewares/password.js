module.exports = (req, res, next) => {
  if (!req.body.password || req.body.password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};