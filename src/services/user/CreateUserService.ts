import { getRepository } from 'typeorm';
import { User } from '../../entities/User';
import { isValidEmail } from '../../helpers/isValidEmail';

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

      const findOneByEmail = await repo.findOne({ email });
      const findOneByCpf = await repo.findOne({ cpf });

      if (findOneByEmail || findOneByCpf) {
        throw new Error('Cliente já existe');
      }

      if (!isValidEmail(email)) {
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
