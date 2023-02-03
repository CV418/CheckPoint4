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
const { apicall } = require("./controllers/callapi");

// <-- USER -->
router.post("/register", userControllers.register);
router.post(
  "/login",
  getUserByEmailWithPasswordAndPassToNext,
  verifyPassword,
  verifyToken
);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);

// <-- BIEN IMMO -->
router.post("/bien", bienControllers.add);
router.get("/allBien", bienControllers.selectBien);
router.get("/bien/:id", bienControllers.read);
router.delete("/bien/:id", verifyToken, bienControllers.deleteBien);

// <--API EXTERNE -->
router.get("/api/login", apicall);

module.exports = router;
