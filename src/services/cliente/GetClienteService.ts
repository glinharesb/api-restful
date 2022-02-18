import { getRepository } from 'typeorm';
import { Cliente } from '../../entities/Cliente';

export class GetClienteService {
  async execute(id: string) {
    const repo = getRepository(Cliente);
    const cliente = await repo.findOne(id);

    if (!cliente) {
      return new Error('Cliente does not exists!');
    }

    return cliente;
  }
}
