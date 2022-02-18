import { getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { isEmail } from '../../helpers/isEmail';

type UserCreateService = {
  nome: string;
  cpf: string;
  sexo: string;
  email: string;
};

export class CreateUserService {
  async execute({
    nome,
    cpf,
    sexo,
    email,
  }: UserCreateService): Promise<User | Error> {
    try {
      const repo = getRepository(User);

      if (await repo.findOne({ email })) {
        throw new Error('E-mail já existe');
      }

      if (!isEmail(email)) {
        throw new Error('E-mail inválido');
      }

      const user = repo.create({
        nome,
        cpf,
        sexo,
        email,
      });

      await repo.save(user);

      return user;
    } catch (error) {
      return error;
    }
  }
}
