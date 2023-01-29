module.exports = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  next();
};