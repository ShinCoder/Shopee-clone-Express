import { Router } from 'express';
import { userRouter } from './User/user.route.js';

export const mainRouter = Router();

mainRouter.use('/user', userRouter);
