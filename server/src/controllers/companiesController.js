import { readCompanies, writeCompanies } from '../models/companiesModel.js';

// Get and render all companies
export function getAllCompanies(req, res) {
  const companies = readCompanies();
  res.render('companies', { companies });
}

// create a new company
export function createCompany(req, res) {
  const companies = readCompanies();
  const newCompany = req.body;
  newCompany.id = Date.now(); // Create an ID
  companies.push(newCompany);
  writeCompanies(companies);
  res.end("Company created successfully!");
  res.redirect('/companiesRoutes'); 
}