import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';
import { isEmpty } from '../../helpers/isEmpty';
import { isValidManufacturing } from '../../helpers/isValidManufacturing';

type ProductCreateService = {
  nome: string;
  fabricacao: string;
  tamanho: string;
  valor: number;
};

export class CreateProductService {
  async execute({
    nome,
    fabricacao,
    tamanho,
    valor,
  }: ProductCreateService): Promise<Product | Error> {
    try {
      const generalValidate = isEmpty({
        nome,
        fabricacao,
        tamanho,
        valor,
      });

      if (generalValidate.length > 0) {
        throw new Error(generalValidate[0]);
      }

      const repo = getRepository(Product);

      if (await repo.findOne({ nome })) {
        throw new Error('product already exists');
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
