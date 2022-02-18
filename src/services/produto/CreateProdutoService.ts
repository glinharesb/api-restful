import { getRepository } from 'typeorm';
import { Produto } from '../../entities/Produto';

type ProdutoCreateService = {
  nome: string;
  fabricacao: string;
  tamanho: string;
  valor: string;
};

export class CreateProdutoService {
  async execute({
    nome,
    fabricacao,
    tamanho,
    valor,
  }: ProdutoCreateService): Promise<Produto | Error> {
    const repo = getRepository(Produto);

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
