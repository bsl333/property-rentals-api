const router = require('express').Router();
const rentalCtrl = require('../controllers/rentals');

router.get('/', rentalCtrl.getRentals);
router.get('/total', rentalCtrl.totalRentals);

module.exports = router;
