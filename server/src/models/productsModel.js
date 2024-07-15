import fs from 'fs';

const path = './json/products.json';

// Read all products from the JSON file
export function readProducts() {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

// Write products data to the JSON file
export function writeProducts(data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
}