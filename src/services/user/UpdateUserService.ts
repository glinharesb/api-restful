import { getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { isEmail } from '../../helpers/isEmail';

type UserUpdateService = {
  codigo_cliente: string;
  nome: string;
  cpf: string;
  sexo: string;
  email: string;
};

export class UpdateUserService {
  async execute({ codigo_cliente, nome, cpf, sexo, email }: UserUpdateService) {
    const repo = getRepository(User);
    const user = await repo.findOne(codigo_cliente);

    if (!user) {
      return new Error('User does not exists!');
    }

    user.nome = nome ? nome : user.nome;
    user.cpf = cpf ? cpf : user.cpf;
    user.sexo = sexo ? sexo : user.sexo;
    user.email = email ? email : user.email;

    if (!isEmail(email)) {
      return new Error('Invalid e-mail');
    }

    await repo.save(user);

    return user;
  }
}
