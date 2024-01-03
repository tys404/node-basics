import express from 'express';
import { addProduct, renderAdminProducts, renderAddProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/admin/add-product', (req, res, next) => {
    renderAddProduct(req, res, next);
});

router.get('/admin/products', renderAdminProducts);

router.post('/admin/add-product', addProduct);


export default router;
