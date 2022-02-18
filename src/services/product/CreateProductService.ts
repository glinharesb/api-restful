import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';

type ProductCreateService = {
  nome: string;
  fabricacao: string;
  tamanho: string;
  valor: string;
};

export class CreateProductService {
  async execute({
    nome,
    fabricacao,
    tamanho,
    valor,
  }: ProductCreateService): Promise<Product | Error> {
    const repo = getRepository(Product);

    if (await repo.findOne({ nome })) {
      return new Error('Produto já existe');
    }

    const cliente = repo.create({
      nome,
      fabricacao,
      tamanho,
      valor,
    });

    await repo.save(cliente);

    return cliente;
  }
}
