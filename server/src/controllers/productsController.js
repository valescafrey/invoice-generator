import { readProducts, writeProducts } from '../models/productsModel.js';

// Get and render all products
export function getAllProducts(req, res) {
  const products = readProducts();
  res.render('products', { products });
}

// create a new product
export function createProduct(req, res) {
  const products = readProducts();
  const newProduct = req.body;
  newProduct.id = Date.now(); // Generate an ID
  products.push(newProduct);
  writeProducts(products);
  res.redirect('/productsRoute');
}
