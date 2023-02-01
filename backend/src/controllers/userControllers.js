const jwt = require("jsonwebtoken");
const models = require("../models");

const verifyPassword = (req, res) => {
  if (req.user.hashedPassword === req.body.hashedPassword) {
    const payload = {
      sub: req.user.id,
      email: req.user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    delete req.user.hashedPassword;
    res.send({
      token,
      user: {
        ...req.user,
      },
    });
  } else {
    res.status(401).json("wrong password or username");
  }
};

const register = (req, res) => {
  const user = req.body.updatedData;
  models.user
    .insert(user)
    .then(([rows]) => {
      res.send(rows);
    })

    .catch((err) => {
      console.error(err);
      if (err.code === "ER_DUP_ENTRY") {
        res.sendStatus(409);
      } else {
        res.sendStatus(500);
      }
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send("updated");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the user");
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readAll = (req, res) => {
  models.user
    .findAll()
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.user
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send("updated");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  register,
  verifyPassword,
  edit,
  destroy,
  read,
  readAll,
};
