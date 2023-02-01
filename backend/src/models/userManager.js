const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // Insertion dans la database utilisée pour register
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
}

module.exports = UserManager;
