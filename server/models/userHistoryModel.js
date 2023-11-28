// models/userHistoryModel.js
const mongoose = require('mongoose');

const userHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to your user model
      required: true,
    },
    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle', // Reference to your vehicle model
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const UserHistory = mongoose.model('UserHistory', userHistorySchema);
module.exports = UserHistory;
