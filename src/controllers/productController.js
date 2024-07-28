import db from '../config/db.js';
import Product from '../models/product.js';

class ProductController {
  constructor() {
    this.products = [];
  }

  async update(product, id) {
    const [result] = await db.query(
      'UPDATE products SET  name = ?, price = ?, description = ? WHERE id = ?',
      [product.name, product.price, product.description,  id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows;
  }

  async create(product) {
    const [result] = await db.query(
      'INSERT INTO products ( name, price, description ) VALUES (?, ?, ?, ?)',
      [product. name, product.price, product.description]
    );
    return result.insertId;
  }

  async getAllProducts() {
    try {
      const [rows] = await db.query('SELECT * FROM products');
      return rows;
    } catch (error) {
      console.error('Database query failed:', error);
      throw error;
    }
  }


  async getProductById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows.map(
      (row) =>
        new Product(
          row.id,
          row. name,
          row.price,
          row.description,
          row.images
        )
    );
  }
}

export default ProductController;