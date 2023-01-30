module.exports = (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};