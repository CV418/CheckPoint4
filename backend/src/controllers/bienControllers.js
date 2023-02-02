const models = require("../models");

const handleError = (res, error) => {
  console.error(error);
  res.status(500);
};

const read = (req, res) => {
  models.bien
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => handleError(res, err));
};

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

const deleteBien = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const hasToken = req.payload ? 1 : null;
  models.bien
    .deletebiens(id, hasToken)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send("deleted");
      }
    })
    .catch((err) => handleError(res, err));
};

module.exports = {
  browse,
  add,
  edit,
  selectBien,
  deleteBien,
  read,
};
