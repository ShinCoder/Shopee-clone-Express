import { Router } from 'express';
import ProductController from './product.controller.js';

export const productRouter = Router();

productRouter.route('/discovery').get(ProductController.getDiscovery);
