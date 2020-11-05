const rentalsModel = require('../models/rentals');

const getRentals = (req, res) => {
  const { start = 0, end = 10 } = req.body;
  const rentals = rentalsModel.getRentals(start, end);
  res.send({ rentals });
};

module.exports = {
  getRentals,
};
