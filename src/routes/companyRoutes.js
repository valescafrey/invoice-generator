import express from 'express';
import CompanyController from '../controllers/companyController.js';

const router = express.Router();
const companyController = new CompanyController();

// Route to get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await companyController.getAllCompanies();
    res.render('companies', { companies });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to add a new company
router.post('/add', async (req, res) => {
  const { name, address, phone, email } = req.body;
  try {
    await companyController.create({ name, address, phone, email });
    res.redirect('/companies');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to update an existing company
router.post('/update', async (req, res) => {
  const { id, name, address, phone, email } = req.body;
  try {
    await companyController.update({ name, address, phone, email }, id);
    res.redirect('/companies');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to delete a company
router.post('/delete', async (req, res) => {
  const { id } = req.body;
  try {
    await companyController.delete(id);
    res.redirect('/companies');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;