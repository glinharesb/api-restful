import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

export class GetProductService {
  async execute(codigo_produto: string) {
    try {
      const repo = getRepository(Product);
      const product = await repo.findOne(codigo_produto);

      if (!product) {
        throw new Error('Produto não existe');
      }

      return product;
    } catch (error) {
      return error;
    }
  }
}
