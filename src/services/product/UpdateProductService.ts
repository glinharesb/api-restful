import { getRepository } from 'typeorm';
import { Product } from '../../entities/Product';
import { isValidManufacturing } from '../../helpers/isValidManufacturing';

type ProductUpdateService = {
  codigo_produto: string;
  nome: string;
  fabricacao: string;
  tamanho: string;
  valor: number;
};

export class UpdateProductService {
  async execute({
    codigo_produto,
    nome,
    fabricacao,
    tamanho,
    valor,
  }: ProductUpdateService) {
    try {
      const repo = getRepository(Product);
      const product = await repo.findOne(codigo_produto);

      if (!product) {
        throw new Error('product does not exists');
      }

      product.nome = nome ? nome : product.nome;
      product.fabricacao = fabricacao ? fabricacao : product.fabricacao;
      product.tamanho = tamanho ? tamanho : product.tamanho;
      product.valor = valor ? valor : product.valor;

      const validate = isValidManufacturing(product.fabricacao);
      if (validate instanceof Error) {
        return validate;
      }

      await repo.save(product);

      return product;
    } catch (error) {
      return error;
    }
  }
}
