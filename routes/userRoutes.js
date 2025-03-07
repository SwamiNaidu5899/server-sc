// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  Userlogout,
  verifyOtp,
} = require("../controllers/userController");
const auth = require("../middlewares/auth");
const Admin = require("../middlewares/admin");
const user = require("../middlewares/user");

// basic routes
// Register
router.post("/register", registerUser);
// verify otp
router.post("/verify-otp", verifyOtp);
// Login user
router.post("/login", loginUser);
// logout
router.get("/logout", auth, Userlogout);

// adnim routes
// router.get('/', auth, Admin, getAllUsers);
router.get("/", getAllUsers);
// Delete user by ID
router.delete("/:id", auth, Admin, deleteUser);

// user routes
// Get a single user by ID
router.get("/:id", auth, user, getUserById);
// Update user by ID
router.put("/:id", auth, user, updateUser);

module.exports = router;