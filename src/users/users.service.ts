/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | Error> {
    try {
      const findOneByEmail = await this.usersRepository.findOne({
        email: createUserDto.email,
      });

      const findOneByCpf = await this.usersRepository.findOne({
        cpf: createUserDto.cpf,
      });

      if (findOneByEmail || findOneByCpf) {
        throw new Error('Cliente já existe');
      }

      const user = new User();
      user.nome = createUserDto.nome;
      user.sexo = createUserDto.sexo;
      user.cpf = createUserDto.cpf;
      user.email = createUserDto.email;

      return this.usersRepository.save(user);
    } catch (error) {
      return error;
    }
  }

  async update(updateUserDto: UpdateUserDto): Promise<User | Error> {
    try {
      const user = await this.usersRepository.findOne(
        updateUserDto.codigo_cliente
      );

      if (!user) {
        throw new Error('Cliente não existe');
      }

      user.nome = updateUserDto.nome ? updateUserDto.nome : user.nome;
      user.cpf = updateUserDto.cpf ? updateUserDto.cpf : user.cpf;
      user.sexo = updateUserDto.sexo ? updateUserDto.sexo : user.sexo;
      user.email = updateUserDto.email ? updateUserDto.email : user.email;

      return this.usersRepository.save(user);
    } catch (error) {
      return error;
    }
  }

  async remove(id: string): Promise<User | Error> {
    try {
      const user = await this.usersRepository.findOne(id);

      if (!user) {
        throw new Error('Cliente não existe');
      }

      await this.usersRepository.delete(id);

      return user;
    } catch (error) {
      return error;
    }
  }

  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
}
