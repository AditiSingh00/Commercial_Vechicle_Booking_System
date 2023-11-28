const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: "String",
      require: [true, "Name is required"],
    },
    email: {
      type: "String",
      require: [true, "Email is required"],
    },
    phone: {
      type: "String",
      require: [true, "Phone is required"],
      unique: true,
    },
    password: {
      type: "String",
      require: [true, "Password is required"],
    },
    usertype: {
      type: "String",
      default: "Student",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
