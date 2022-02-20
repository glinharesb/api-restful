/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product | Error> {
    try {
      if (
        await this.productsRepository.findOne({ nome: createProductDto.nome })
      ) {
        throw new Error('Produto já existe');
      }

      const product = new Product();
      product.nome = createProductDto.nome;
      product.fabricacao = createProductDto.fabricacao;
      product.tamanho = createProductDto.tamanho;
      product.valor = createProductDto.valor;

      return this.productsRepository.save(product);
    } catch (error) {
      return error;
    }
  }

  async update(updateUserDto: UpdateProductDto): Promise<Product | Error> {
    try {
      const product = await this.productsRepository.findOne(
        updateUserDto.codigo_produto
      );

      if (!product) {
        throw new Error('Produto não existe');
      }

      product.nome = updateUserDto.nome ? updateUserDto.nome : product.nome;
      product.fabricacao = updateUserDto.fabricacao
        ? updateUserDto.fabricacao
        : product.fabricacao;
      product.tamanho = updateUserDto.tamanho
        ? updateUserDto.tamanho
        : product.tamanho;
      product.valor = updateUserDto.valor ? updateUserDto.valor : product.valor;

      return this.productsRepository.save(product);
    } catch (error) {
      return error;
    }
  }

  async remove(id: string): Promise<Product | Error> {
    try {
      const user = await this.productsRepository.findOne(id);

      if (!user) {
        throw new Error('Produto não existe');
      }

      await this.productsRepository.delete(id);

      return user;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string): Promise<Product> {
    return this.productsRepository.findOne(id);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
}
