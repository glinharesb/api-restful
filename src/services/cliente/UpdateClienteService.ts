import { getRepository } from 'typeorm';
import { Cliente } from '../../entities/Cliente';
import { isEmail } from '../../helpers/isEmail';

type ClienteUpdateService = {
  codigo_cliente: string;
  nome: string;
  cpf: string;
  sexo: string;
  email: string;
};

export class UpdateClienteService {
  async execute({
    codigo_cliente,
    nome,
    cpf,
    sexo,
    email,
  }: ClienteUpdateService) {
    const repo = getRepository(Cliente);
    const cliente = await repo.findOne(codigo_cliente);

    if (!cliente) {
      return new Error('Cliente does not exists!');
    }

    cliente.nome = nome ? nome : cliente.nome;
    cliente.cpf = cpf ? cpf : cliente.cpf;
    cliente.sexo = sexo ? sexo : cliente.sexo;
    cliente.email = email ? email : cliente.email;

    if (!isEmail(email)) {
      return new Error('Invalid e-mail');
    }

    await repo.save(cliente);

    return cliente;
  }
}
