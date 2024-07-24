import db from '../config/db.js';
import Invoice from '../models/invoice.js';

class InvoiceController {
  constructor() {
    this.invoices = [];
  }

  async update(invoice, id) {
    const [result] = await db.query(
      'UPDATE invoices SET company_id = ?, client_id = ?, total = ? WHERE id = ?',
      [invoice.company_id, invoice.client_id, invoice.total, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await db.query('DELETE FROM invoices WHERE id = ?', [id]);
    return result.affectedRows;
  }

  async create(invoice) {
    const [result] = await db.query(
      'INSERT INTO invoices (company_id, client_id, total) VALUES (?, ?, ?)',
      [invoice.company_id, invoice.client_id, invoice.total]
    );
    return result.insertId;
  }

  async getAllInvoices() {
    const [rows] = await db.query('SELECT * FROM invoices');
    this.invoices = rows.map(
      (row) => new Invoice(row.id, row.company_id, row.client_id, row.total)
    );
    return this.invoices;
  }

  async getInvoiceById(id) {
    const [rows] = await db.query('SELECT * FROM invoices WHERE id = ?', [id]);
    return rows.map(
      (row) => new Invoice(row.id, row.company_id, row.client_id, row.total)
    );
  }
}

export default InvoiceController;