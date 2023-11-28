// routes/userHistoryRoute.js
const express = require('express');
const userHistoryController = require('../controllers/userHistoryController');
const router = express.Router();

router.post('/add-booking', userHistoryController.addBooking);

module.exports = router;
