import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

export class GetProductService {
  async execute(productCode: string) {
    try {
      const repo = getRepository(Product);
      const product = await repo.findOne(productCode);

      if (!product) {
        throw new Error('Produto não existe');
      }

      return product;
    } catch (error) {
      return error;
    }
  }
}
