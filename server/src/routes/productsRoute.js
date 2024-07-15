

import express from 'express';
import { getAllProducts, createProduct } from '../controllers/productsController.js';

const router = express.Router(); // SHOULD I CHANGE THIS CONS NAME TO productsRouter

// Route to get all products
router.get('/', getAllProducts);
// Route to create a new product
router.post('//create', createProduct);

export default router; 