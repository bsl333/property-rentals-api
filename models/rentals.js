const db = require('../db/loadData');

const getRentals = (start, end) => {
  return db.data.slice(start, end);
};

module.exports = {
  getRentals,
};
