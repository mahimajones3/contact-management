const db = require('../config/database');

class Contact {
  static getAll() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM contacts ORDER BY created_at DESC', [], (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM contacts WHERE id = ?', [id], (err, row) => {
        if (err) reject(err);
        resolve(row);
      });
    });
  }

  static create(contact) {
    return new Promise((resolve, reject) => {
      const { name, email, phone, address } = contact;
      db.run(
        'INSERT INTO contacts (name, email, phone, address) VALUES (?, ?, ?, ?)',
        [name, email, phone, address],
        function(err) {
          if (err) reject(err);
          resolve({ id: this.lastID, ...contact });
        }
      );
    });
  }

  static update(id, contact) {
    return new Promise((resolve, reject) => {
      const { name, email, phone, address } = contact;
      db.run(
        'UPDATE contacts SET name = ?, email = ?, phone = ?, address = ? WHERE id = ?',
        [name, email, phone, address, id],
        function(err) {
          if (err) reject(err);
          resolve(this.changes > 0);
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM contacts WHERE id = ?', [id], function(err) {
        if (err) reject(err);
        resolve(this.changes > 0);
      });
    });
  }

  static search(query) {
    return new Promise((resolve, reject) => {
      const searchQuery = `%${query}%`;
      db.all(
        'SELECT * FROM contacts WHERE name LIKE ? OR email LIKE ?',
        [searchQuery, searchQuery],
        (err, rows) => {
          if (err) reject(err);
          resolve(rows);
        }
      );
    });
  }
}

module.exports = Contact;