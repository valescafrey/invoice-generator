import { readCompanies, writeCompanies } from '../models/companiesModel.js';

// Get and render all companies
function getAllCompanies(req, res) {
  const companies = readCompanies();
  res.render('companies', { companies });
}

// create a new company
function createCompany(req, res) {
  const companies = readCompanies();
  const newCompany = req.body;
  newCompany.id = Date.now(); // Create an ID
  companies.push(newCompany);
  writeCompanies(companies);
  res.end("Company created successfully!");
  res.redirect('/companiesRoutes'); 
}

module.exports = { getAllCompanies, createCompany };