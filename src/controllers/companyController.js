import db from '../config/db.js';
import Company from '../models/company.js';

class CompanyController {
  constructor() {
    this.companies = [];
  }

  async update(company, id) {
    const [result] = await db.query(
      'UPDATE companies SET name = ?, address = ?, phone = ?, email = ? WHERE id = ?',
      [company.name, company.address, company.phone, company.email, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await db.query('DELETE FROM companies WHERE id = ?', [id]);
    return result.affectedRows;
  }

  async create(company) {
    const [result] = await db.query(
      'INSERT INTO companies (name, address, phone, email) VALUES (?, ?, ?, ?)',
      [company.name, company.address, company.phone, company.email]
    );
    return result.insertId;
  }

  async getAllCompanies() {
    const [rows] = await db.query('SELECT * FROM companies');
    this.companies = rows.map(
      (row) => new Company(row.id, row.name, row.address, row.phone, row.email)
    );
    return this.companies;
  }

  async getCompanyById(id) {
    const [rows] = await db.query('SELECT * FROM companies WHERE id = ?', [id]);
    return rows.map(
      (row) => new Company(row.id, row.name, row.address, row.phone, row.email)
    );
  }
}

export default CompanyController;