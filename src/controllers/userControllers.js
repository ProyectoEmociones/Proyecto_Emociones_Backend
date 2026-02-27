const User = require("../models/userModel");

// CREATE
const createUser = async (req, res) => {
  console.log("BODY RECIBIDO EN CONTROLLER:", req.body);
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    console.log("USUARIO GUARDADO:", savedUser);
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("ERROR AL GUARDAR:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// READ
const getUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
const updateUser = async (req, res) => {
  try {
    const { uid } = req.params;
    const updatedUser = await User.findOneAndUpdate({ uid }, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  try {
    const { uid } = req.params;
    await User.findOneAndDelete({ uid });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
