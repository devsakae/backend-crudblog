module.exports = (req, res, next) => {
  if (!req.body.displayName || req.body.displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};