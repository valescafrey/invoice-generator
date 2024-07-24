import express from 'express';
import InvoiceController from '../controllers/invoiceController.js';

const router = express.Router();
const invoiceController = new InvoiceController();

// Route to get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await invoiceController.getAllInvoices();
    res.render('invoices', { invoices });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to create a new invoice
router.post('/create', async (req, res) => {
  const { clientId, companyId, products, totalAmount } = req.body;
  try {
    await invoiceController.create({ clientId, companyId, products, totalAmount });
    res.redirect('/invoices');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to delete an invoice
router.post('/delete', async (req, res) => {
  const { id } = req.body;
  try {
    await invoiceController.delete(id);
    res.redirect('/invoices');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;