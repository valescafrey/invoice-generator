
import express from 'express';
import { getAllClients, createClient, editClient } from '../controllers/clientsController.js';

const router = express.Router();

// Route to get all clients
router.get('/', getAllClients);
// Route to create a new client
router.post('/create', createClient);
// Route to edit an existing client
router.post('/edit', editClient);

export default router;