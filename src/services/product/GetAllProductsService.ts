import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

export class GetAllProductsService {
  async execute() {
    try {
      const repo = getRepository(Product);
      const products = await repo.find();

      return products;
    } catch (error) {
      return error;
    }
  }
}
