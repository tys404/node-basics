import express from 'express';
import { getCart, getProducts, getOrders, getCheckout, getShop } from '../controllers/shop.js';

const router = express.Router();

router.get('/', getShop);

router.get('/cart', getCart);

router.get('/products', getProducts);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

export default router;