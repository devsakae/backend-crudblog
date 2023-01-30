module.exports = (req, res, next) => {
  if (!req.body.title || !req.body.content
    || !req.body.categoryIds || req.body.categoryIds.length < 1) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};