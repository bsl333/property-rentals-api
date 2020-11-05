const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const data = [];

const loadData = () => {
  return new Promise((resolve, reject) => {
    const dataPath = path.join(__dirname, 'rentals.csv');
    fs.createReadStream(dataPath)
      .pipe(csv())
      .on('data', val => data.push(val))
      .on('end', () => {
        resolve();
      });
  });
};

module.exports = {
  data,
  loadData,
};
