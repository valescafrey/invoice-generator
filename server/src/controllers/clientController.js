import db from '../config/db.js';
import Client from '../models/client.js';

class ClientController {
  constructor() {
    this.clients = [];
  }

  async update(client, id) {
    const [result] = await db.query(
      'UPDATE clients SET name = ?, address = ?, phone = ?, email = ? WHERE id = ?',
      [client.name, client.address, client.phone, client.email, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await db.query('DELETE FROM clients WHERE id = ?', [id]);
    return result.affectedRows;
  }

  async create(client) {
    const [result] = await db.query(
      'INSERT INTO clients (name, address, phone, email) VALUES (?, ?, ?, ?)',
      [client.name, client.address, client.phone, client.email]
    );
    return result.insertId;
  }

  async getAllClients() {
    const [rows] = await db.query('SELECT * FROM clients');
    this.clients = rows.map(
      (row) => new Client(row.id, row.name, row.address, row.phone, row.email)
    );
    return this.clients;
  }

  async getClientById(id) {
    const [rows] = await db.query('SELECT * FROM clients WHERE id = ?', [id]);
    return rows.map(
      (row) => new Client(row.id, row.name, row.address, row.phone, row.email)
    );
  }
}

export default ClientController;