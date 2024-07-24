import db from '../config/db.js';

class Product {
  constructor(id, title, price, description, category, images) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }
}

export default Product;