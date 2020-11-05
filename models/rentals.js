const db = require('../db/loadData');

const getRentals = (start, end) => {
  return db.data.slice(start, end);
};

const totalRentals = () => {
  return db.data.length;
};

module.exports = {
  getRentals,
  totalRentals,
};
