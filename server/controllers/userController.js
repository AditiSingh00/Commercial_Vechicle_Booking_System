const userModel = require("../models/userModel");
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");}
    res.status(200).json({
      user: {
        _id: user._id,
        email: user.email,
        usertype: user.usertype,}
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,countTotal: users.length,message: "All Users",users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false, message: "Could not get users",
    });
  }
};

module.exports = { loginController, registerController, getAllUsers };
