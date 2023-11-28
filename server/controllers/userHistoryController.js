// controllers/userHistoryController.js
const UserHistory = require('../models/userHistoryModel');

const addBooking = async (req, res) => {
  try {
    const {
      user,
      vehicle,
      source,
      destination,
      date,
      distance,
    } = req.body;

    const booking = new UserHistory({
      user,
      vehicle,
      source,
      destination,
      date,
      distance,
    });

    await booking.save();

    res.status(201).json({ success: true, message: 'Booking added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { addBooking };
