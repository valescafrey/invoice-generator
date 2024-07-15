import express from 'express';
import { getAllCompanies, createCompany } from '../controllers/companiesController.js';

const router = express.Router();

// Route to get all companies
router.get('/', getAllCompanies);
// Route to create a new company
router.post('/create', createCompany);

export default router;