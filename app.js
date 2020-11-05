const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const PORT = 5005;
const rentalsRoute = require('./routes/rentals');
const db = require('./db/loadData');

async function main() {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  app.use(morgan('dev'));
  app.use('/rentals', rentalsRoute);
  await db.loadData();
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

main();
