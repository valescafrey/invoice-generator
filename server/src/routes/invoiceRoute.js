import express from 'express';
import { readCompanies } from '../models/companiesModel.js';
import { readClients } from '../models/clientsModel.js';
import { readProducts } from '../models/productsModel.js';

const router = express.Router();

// Route to render invoice page with data
router.get('/', (req, res) => {
  const companies = readCompanies();
  const clients = readClients();
  const products = readProducts();
  res.render('invoice', { companies, clients, products });
});

export default router;