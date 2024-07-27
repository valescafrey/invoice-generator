import express from 'express';
import ProductController from '../controllers/productController.js';

const router = express.Router();
const productController = new ProductController();

// Route to get all products

router.get('/', async (req, res) => {
  try {
    const products = await productController.getAllProducts();
    console.log(products);
    res.render('products', { products });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to add a new product
router.post('/add', async (req, res) => {
  const { name, price, description, category } = req.body;
  try {
    await productController.create({ name, price, description, category });
    res.redirect('/products');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to update an existing product
router.post('/update', async (req, res) => {
  const { id, name, price, description, category } = req.body;
  try {
    await productController.update({ name, price, description, category }, id);
    res.redirect('/products');
  } catch (error){
    res.status(500).send(error.message);
  }
});

// Route to delete a product
router.post('/delete', async (req, res) => {
  const { id } = req.body;
  try {
    await productController.delete(id);
    res.redirect('/products');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;