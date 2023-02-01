const express = require("express");
require("dotenv").config();

const router = express.Router();

const {
  getUserByEmailWithPasswordAndPassToNext,
  verifyToken,
} = require("./middleware/auth");
const userControllers = require("./controllers/userControllers");
const { verifyPassword } = require("./controllers/userControllers");
const bienControllers = require("./controllers/bienControllers");

// <-- USER -->
router.post("/register", userControllers.register);
router.post(
  "/login",
  getUserByEmailWithPasswordAndPassToNext,
  verifyPassword,
  verifyToken
);
router.get("/user/:id", userControllers.read);

// <-- BIEN IMMO -->
router.post("/bien", bienControllers.add);
router.get("/bien/:id", bienControllers.selectBien);

module.exports = router;
