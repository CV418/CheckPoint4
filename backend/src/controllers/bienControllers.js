const models = require("../models");

const browse = (req, res) => {
  const bien = req.query;
  models.bien
    .findBienByQuery(bien)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const bien = req.body.updatedData;

  models.bien
    .insert(bien)
    .then(([result]) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const bien = req.body;

  bien.id = parseInt(req.params.id, 10);

  models.bien
    .update(bien)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const selectBien = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const hasToken = req.payload ? 1 : null;

  models.bien
    .selectAllBien(id, hasToken)
    .then(([result]) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
  edit,
  selectBien,
};
