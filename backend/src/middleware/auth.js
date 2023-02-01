/* eslint-disable consistent-return */
// const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const models = require("../models");

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }
    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  models.user
    .findByEmail(email)
    .then(([users]) => {
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const verifyEmailExists = (req, res, next) => {
  const { email } = req.body;

  models.users.checkExistingEmail(email).then((result) => {
    if (result.length > 0) {
      next();
    } else {
      return res.status(400).send({ message: "email not found" });
    }
  });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
  verifyEmailExists,
  verifyToken,
};
