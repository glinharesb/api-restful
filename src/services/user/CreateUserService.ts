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
    const repo = getRepository(User);

    if (await repo.findOne({ email })) {
      return new Error('E-mail already exists');
    }

    if (!isEmail(email)) {
      return new Error('Invalid e-mail');
    }

    const user = repo.create({
      nome,
      cpf,
      sexo,
      email,
    });

    await repo.save(user);

    return user;
  }
}
