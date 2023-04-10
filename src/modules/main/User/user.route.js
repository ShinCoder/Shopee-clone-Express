import { Router } from 'express';
import UserController from './user.controller.js';

export const userRouter = Router();

userRouter.route('/notification').get(UserController.getNotification);
