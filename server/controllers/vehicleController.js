const fs = require("fs");
const slugify = require("slugify");
const vehicleModel = require("../models/vehicleModel");

const createVehicleController = async (req, res) => {
  try {
    const { name, priceperkm, capacity } = req.fields;
    const { photo } = req.files;

    if (!name || !priceperkm || !capacity || !photo) {
      return res.status(500).send({ error: "All fields are required" });
    }

    if (photo.size > 1000000) {
      return res
        .status(500)
        .send({ error: "Photo size must be less than 1 MB" });
    }

    const existingVehicle = await vehicleModel.findOne({ name });
    if (existingVehicle) {
      return res
        .status(200)
        .send({ success: true, message: "Vehicle Already Exist" });
    }

    const newVehicle = new vehicleModel({
      name,
      slug: slugify(name),
      photo: {
        data: fs.readFileSync(photo.path),
        contentType: photo.type,
      },
      priceperkm,
      capacity,
    });

    await newVehicle.save();

    res.status(201).send({
      success: true,
      message: "New Vehicle Created",
      vehicle: newVehicle,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Something went wrong" });
  }
};

const getVehicleController = async (req, res) => {
  try {
    const vehicles = await vehicleModel
      .find({})
      .select("-photo")
     
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      countTotal: vehicles.length,
      message: "All Vehicles",
      vehicles,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Could not get vehicles",
    });
  }
};

const getSingleVehicleController = async (req, res) => {
  try {
    const vehicle = await vehicleModel
      .findOne({ slug: req.params.slug })
      .select("-photo");

    res.status(200).send({
      success: true,
      message: "Single Vehicle",
      vehicle,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Could not get Vehicle",
    });
  }
};

const getvPhotoController = async (req, res) => {
  try {
    const vehicleId = req.params.pid;

    if (!vehicleId) {
      return res.status(400).send({ error: "Vehicle ID is missing" });
    }

    const vehicle = await vehicleModel.findById(vehicleId).select("photo");

    if (vehicle && vehicle.photo.data) {
      res.set("Content-type", vehicle.photo.contentType);
      return res.status(200).send(vehicle.photo.data);
    } else {
      return res.status(404).send({ error: "Vehicle not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Could not get Photo",
    });
  }
};


module.exports = {
  createVehicleController,
  getVehicleController,
  getSingleVehicleController,
  getvPhotoController,
};
