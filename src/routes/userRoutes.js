const express = require("express");
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

const router = express.Router();

// CRUD usuarios
router.post("/", createUser);
router.get("/:uid", getUser);
router.put("/:uid", updateUser);
router.delete("/:uid", deleteUser);

module.exports = router;
