import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

export class DeleteProductService {
  async execute(productCode: string) {
    try {
      const repo = getRepository(Product);

      const product = await repo.findOne(productCode);
      if (!product) {
        throw new Error('product does not exists');
      }

      await repo.delete(productCode);

      return product;
    } catch (error) {
      return error;
    }
  }
}
