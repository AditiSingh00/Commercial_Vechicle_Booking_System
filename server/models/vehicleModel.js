const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  photo: {
    data: {
      type: Buffer,
      required: true,
    },
    contentType: {
      type: String,
      required: true,
    },
  },
  priceperkm: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
});

const vehicleModel = mongoose.model("Vehicle", vehicleSchema);
module.exports = vehicleModel;
