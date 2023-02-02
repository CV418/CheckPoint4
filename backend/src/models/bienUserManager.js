const AbstractManager = require("./AbstractManager");

class BienManager extends AbstractManager {
  constructor() {
    super({ table: "userBien" });
  }

  postBien(idUser, idBien) {
    return this.connection.query(
      `INSERT INTO ${this.table} (idUser , idBien) VALUES (?, ?)`,
      [idUser, idBien]
    );
  }

  deleteBien(idBien) {
    return this.connection.query(`delete from ${this.table} where idBien = ?`, [
      idBien,
    ]);
  }
}

module.exports = BienManager;
