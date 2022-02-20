import { getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { isValidEmail } from '../../helpers/isValidEmail';

type UserUpdateService = {
  codigo_cliente: string;
  nome: string;
  cpf: string;
  sexo: string;
  email: string;
};

export class UpdateUserService {
  async execute({ codigo_cliente, nome, cpf, sexo, email }: UserUpdateService) {
    try {
      const repo = getRepository(User);
      const user = await repo.findOne(codigo_cliente);

      if (!user) {
        throw new Error('user does not exists');
      }

      user.nome = nome ? nome : user.nome;
      user.cpf = cpf ? cpf : user.cpf;
      user.sexo = sexo ? sexo : user.sexo;
      user.email = email ? email : user.email;

      if (!isValidEmail(email)) {
        throw new Error('invalid email');
      }

      await repo.save(user);

      return user;
    } catch (error) {
      return error;
    }
  }
}
