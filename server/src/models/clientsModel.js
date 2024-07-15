
import fs from 'fs';

const path = './json/clients.json';

// Read all clients from the JSON file
export function readClients() {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

// Write clients data to the JSON file
export function writeClients(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}