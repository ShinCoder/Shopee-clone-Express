import { Router } from 'express';
import { userRouter } from './User/user.route.js';
import { productRouter } from './Product/product.route.js';

export const mainRouter = Router();

mainRouter.use('/users', userRouter);
mainRouter.use('/products', productRouter);
