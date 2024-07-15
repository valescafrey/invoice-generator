import { readClients, writeClients } from '../models/clientsModel.js';

// Get and render all clients
 function getAllClients(req, res) {
    const clients = readClients();
    res.render('clients', { clients });
}

// Create a new client
 function createClient(req, res) {
    const clients = readClients();
    const newClient = req.body;
    newClient.id = Date.now(); // Generate a unique ID
    clients.push(newClient);
    writeClients(clients);
    res.end("Client created successfully!");
    res.redirect('/clientsRoute');
}

// Edit an existing client
 function editClient(req, res) {
    const clients = readClients();
    const editedClient = req.body;
    const clientIndex = clients.findIndex(client => client.id == editedClient.id);

    if (clientIndex > -1) {
        clients[clientIndex] = editedClient;
        writeClients(clients);
    }
    res.end("Client updated successfully!");
    res.redirect('/clientsRoute');
}

module.exports = { getAllClients, createClient };