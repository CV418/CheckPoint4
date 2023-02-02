const AbstractManager = require("./AbstractManager");

class BienManager extends AbstractManager {
  constructor() {
    super({ table: "bien" });
  }

  find(bien) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE bien.id = ?`,
      [bien]
    );
  }

  insert(bien) {
    const {
      idUser,
      titleBien,
      type,
      piece,
      exterieur,
      surface,
      prix,
      ville,
      description,
      venteLocation,
    } = bien;
    return this.connection.query(
      `INSERT INTO ${this.table} (
        idUser,
        titleBien,
        type,
        piece,
        exterieur,
        surface,
        prix,
        ville,
        description,
        venteLocation
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        idUser,
        titleBien,
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

  selectAllBien() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  deleteBien(id) {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
}

module.exports = BienManager;
