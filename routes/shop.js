import express from 'express';
import { renderShop } from '../controllers/products.js';

const router = express.Router();

router.get('/', renderShop);

export default router;
