//INVOICE GENERATOR
// should create companies, products, clients
// should select data and generate an invoice (layout pdf)
// should list invoices


// inform use of express
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// inform routes
import companiesRouter from './routes/companies.js';
import clientsRouter from './routes/clients.js';
import productsRouter from './routes/products.js';
import invoiceRouter from './routes/invoice.js';

// get directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initialize the express
const app = express();

// middleware to use json (data-base fake)
app.use(express.json()); 

// middleware to request and log time
app.use((req, res, next) => {
  req.requestTime = new Date().toString();
  next();
});

app.use((req, res, next) => {
  console.log('Request Time:', req.requestTime);
  next();
});

//  NAO SEI
app.use(express.static(`${__dirname}/public/`));

// routes
app.use('/companiesRoute', companiesRouter);
app.use('/clientsRoute', clientsRouter);
app.use('/productsRouute', productsRouter);
app.use('/invoiceRoute', invoiceRouter);

// Render the home page
app.get('/', (req, res) => {
  res.render('index');
});

// start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});

