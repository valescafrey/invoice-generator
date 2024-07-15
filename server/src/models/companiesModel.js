import fs from 'fs';

const path = './json/companies.json';

// Read all companies from the JSON
export function readCompanies() {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

// Write companies data to the JSON
export function writeCompanies(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
