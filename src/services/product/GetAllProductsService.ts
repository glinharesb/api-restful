import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

export class GetAllProductsService {
  async execute() {
    const repo = getRepository(Product);
    const clientes = await repo.find();

    return clientes;
  }
}
