import { getRepository } from 'typeorm';
import { Produto } from '../../entities/Produto';

export class GetAllProdutosService {
  async execute() {
    const repo = getRepository(Produto);
    const clientes = await repo.find();

    return clientes;
  }
}
