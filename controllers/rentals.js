const rentalsModel = require('../models/rentals');

const getRentals = (req, res) => {
  const { start = 0, end = 10 } = req.query;
  const rentals = rentalsModel.getRentals(start, end);
  res.send({ rentals });
};

const totalRentals = (_, res) => {
  const total = rentalsModel.totalRentals();
  res.send({ total });
};

module.exports = {
  getRentals,
  totalRentals,
};
