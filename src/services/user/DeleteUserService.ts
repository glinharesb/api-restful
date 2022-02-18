import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

export class DeleteUserService {
  async execute(codigo_cliente: string) {
    try {
      const repo = getRepository(User);

      const user = await repo.findOne(codigo_cliente);
      if (!user) {
        throw new Error('Cliente não existe');
      }

      await repo.delete(codigo_cliente);

      return user;
    } catch (error) {
      return error;
    }
  }
}
