import express from 'express';
import { getCart, getProducts, getProductById, getOrders, getCheckout, getShop } from '../controllers/shop.js';

const router = express.Router();

router.get('/', getShop);

router.get('/cart', getCart);

router.get('/products', getProducts);

router.get('/products/:id', getProductById);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

export default router;