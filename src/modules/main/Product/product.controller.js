import { mockDiscovery } from './product.mock.js';

export default class ProductController {
  static getDiscovery(req, res) {
    const mock = mockDiscovery;

    return res.json(mock);
  }
}
