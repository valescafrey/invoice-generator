import db from '../config/db.js';
import Product from '../models/product.js';

class ProductController {
  constructor() {
    this.products = [];
  }

  async update(product, id) {
    const [result] = await db.query(
      'UPDATE products SET title = ?, price = ?, description = ?, category = ? WHERE id = ?',
      [product.title, product.price, product.description, product.category, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows;
  }

  async create(product) {
    const [result] = await db.query(
      'INSERT INTO products (title, price, description, category) VALUES (?, ?, ?, ?)',
      [product.title, product.price, product.description, product.category]
    );
    return result.insertId;
  }

  async getAllProducts() {
    const [rows] = await db.query('SELECT * FROM products');
    this.products = rows.map(
      (row) =>
        new Product(
          row.id,
          row.title,
          row.price,
          row.description,
          row.category,
          row.images
        )
    );
    return this.products;
  }

  async getProductById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows.map(
      (row) =>
        new Product(
          row.id,
          row.title,
          row.price,
          row.description,
          row.category,
          row.images
        )
    );
  }
}

export default ProductController;