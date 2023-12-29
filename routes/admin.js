import express from 'express';
import { addProduct, renderAddProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/add-product', renderAddProduct);

router.post('/add-product', addProduct);

export default router;
