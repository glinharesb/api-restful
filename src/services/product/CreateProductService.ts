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
    try {
      const repo = getRepository(Product);

      if (await repo.findOne({ nome })) {
        return new Error('Produto já existe');
      }

      const validate = this.validate(fabricacao);
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

  private validate(manufacturing: string) {
    const manufacturingTypes = ['nacional', 'importado'];

    if (!manufacturingTypes.includes(manufacturing?.toLowerCase())) {
      return new Error(
        `A variável 'fabricacao' deve ser do tipo 'nacional' ou 'importado'`
      );
    }
  }
}
