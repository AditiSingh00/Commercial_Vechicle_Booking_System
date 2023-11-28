const express = require("express");
const formidable = require("express-formidable");
const {
  createVehicleController,
  getVehicleController,
  getSingleVehicleController,
  getvPhotoController,
} = require("../controllers/vehicleController");

const router = express.Router();

router.post("/create-vehicle", formidable(), createVehicleController);
router.get("/get-vehicles", getVehicleController);
router.get("/get-vehicle/:slug", getSingleVehicleController);
router.get("/get-photo/:pid", getvPhotoController);

module.exports = router;
