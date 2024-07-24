import express from 'express';
import ClientController from '../controllers/clientController.js';

const router = express.Router();
const clientController = new ClientController();

router.get('/', async (req, res) => {
  const clients = await clientController.getAllClients();
  res.render('clients', { clients });
});

router.post('/add', async (req, res) => {
  const { name, address, phone, email } = req.body;
  await clientController.create({ name, address, phone, email });
  res.redirect('/clients');
});

router.post('/update', async (req, res) => {
  const { id, name, address, phone, email } = req.body;
  await clientController.update({ name, address, phone, email }, id);
  res.redirect('/clients');
});

router.post('/delete', async (req, res) => {
  const { id } = req.body;
  await clientController.delete(id);
  res.redirect('/clients');
});

export default router;