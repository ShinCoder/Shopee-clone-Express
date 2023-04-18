import { Router } from 'express';
import UserController from './user.controller.js';

export const userRouter = Router();

userRouter.route('/:id/notification').get(UserController.getNotification);
