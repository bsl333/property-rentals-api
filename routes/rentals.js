const router = require('express').Router();
const rentalCtrl = require('../controllers/rentals');

router.get('/', rentalCtrl.getRentals);

module.exports = router;
