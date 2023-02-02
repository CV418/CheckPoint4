const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    const {
      lastName,
      firstName,
      adress,
      postalCode,
      city,
      email,
      hashedPassword,
    } = user;
    return this.connection.query(
      `INSERT INTO ${this.table} (lastName,
        firstName,
        adress,
        postalCode,
        city,
        email,
        hashedPassword) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [lastName, firstName, adress, postalCode, city, email, hashedPassword]
    );
  }

  findByEmail(email) {
    return this.connection.query(
      `SELECT * FROM ${this.table} WHERE email = ? `,
      [email]
    );
  }

  update(user) {
    const {
      id,
      lastName,
      firstName,
      adress,
      postalCode,
      city,
      email,
      hashedPassword,
    } = user;
    return this.connection.query(
      `UPDATE ${this.table} SET lastName = ?,
        firstName = ?,
        adress = ?,
        postalCode = ?,
        city = ?,
        email = ?,
        hashedPassword = ? WHERE id = ?`,
      [lastName, firstName, adress, postalCode, city, email, hashedPassword, id]
    );
  }
}

module.exports = UserManager;
