import { mockNotification } from './user.mock.js';

export default class UserController {
  static getNotification(req, res) {
    const notification = mockNotification;
    return res.json(notification);
  }
}
