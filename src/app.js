//INVOICE GENERATOR
// should create companies, products, clients
// should select data and generate an invoice
// should list invoices


// inform use of express
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// inform routes
import companyRoutes from './routes/companyRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import productsRouter from './routes/productRoutes.js';

// get directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initialize the express
const app = express();

// middleware to use json 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Set views to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'))


//  Show where static files are in 
app.use(express.static(path.join(__dirname, '../public')));


// // // // middleware to request and log time
// app.use((req, res, next) => {
//   req.requestTime = new Date().toString();
//   next();
// });

// // app.use((req, res, next) => {
//   console.log('Request Time:', req.requestTime);
//   next();

// routes
app.use('/companies', companyRoutes);
app.use('/clients', clientRoutes);
app.use('/create-clients', clientRoutes);
app.use('/products', productsRouter);
app.use('/invoices', invoiceRoutes);

// Render the home page
app.get('/', (req, res) => {
  res.render('index');
});

// start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});