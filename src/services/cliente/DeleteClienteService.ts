import { getRepository } from 'typeorm';
import { Cliente } from '../../entities/Cliente';

export class DeleteClienteService {
  async execute(codigo_cliente: string) {
    const repo = getRepository(Cliente);

    const cliente = await repo.findOne(codigo_cliente);
    if (!cliente) {
      return new Error('Cliente does not exists!');
    }

    await repo.delete(codigo_cliente);
  }
}
