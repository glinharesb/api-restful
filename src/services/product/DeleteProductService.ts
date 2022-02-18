import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

export class DeleteProductService {
  async execute(codigo_produto: string) {
    try {
      const repo = getRepository(Product);

      const product = await repo.findOne(codigo_produto);
      if (!product) {
        throw new Error('Produto não existe');
      }

      await repo.delete(codigo_produto);

      return product;
    } catch (error) {
      return error;
    }
  }
}
