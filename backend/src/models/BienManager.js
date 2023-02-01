const AbstractManager = require("./AbstractManager");

class BienManager extends AbstractManager {
  constructor() {
    super({ table: "bien" });
  }

  insert(biens) {
    const {
      title,
      type,
      piece,
      exterieur,
      surface,
      prix,
      ville,
      description,
      venteLocation,
    } = biens;
    return this.connection.query(
      `INSERT INTO ${this.table} (
        title,
        type,
        piece,
        exterieur,
        surface,
        prix,
        ville,
        description,
        venteLocation
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        type,
        piece,
        exterieur,
        surface,
        prix,
        ville,
        description,
        venteLocation,
      ]
    );
  }

  selectAllBien(id, userToken) {
    return this.connection.query(
      `SELECT bien.*, user.*
      FROM bien
      JOIN user ON bien.idUser = user.id
      JOIN bienUser ON bienUser.idBien = bien.id
      WHERE user.id = bien.idUser`,
      [id, userToken]
    );
  }
}

module.exports = BienManager;
