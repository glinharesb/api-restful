import { getRepository } from 'typeorm';
import { Cliente } from '../../entities/Cliente';
import { isEmail } from '../../helpers/isEmail';

type ClienteCreateService = {
  nome: string;
  cpf: string;
  sexo: string;
  email: string;
};

export class CreateClienteService {
  async execute({
    nome,
    cpf,
    sexo,
    email,
  }: ClienteCreateService): Promise<Cliente | Error> {
    const repo = getRepository(Cliente);

    if (await repo.findOne({ email })) {
      return new Error('E-mail already exists');
    }

    if (!isEmail(email)) {
      return new Error('Invalid e-mail');
    }

    const cliente = repo.create({
      nome,
      cpf,
      sexo,
      email,
    });

    await repo.save(cliente);

    return cliente;
  }
}
