import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';
import { isValidManufacturing } from '../../helpers/isValidManufacturing';

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
    try {
      const repo = getRepository(Product);

      if (await repo.findOne({ nome })) {
        throw new Error('Produto já existe');
      }

      const validate = isValidManufacturing(fabricacao);
      if (validate instanceof Error) {
        return validate;
      }

      const user = repo.create({
        nome,
        fabricacao,
        tamanho,
        valor,
      });

      await repo.save(user);

      return user;
    } catch (error) {
      return error;
    }
  }
}
