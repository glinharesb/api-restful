import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

export class GetUserService {
  async execute(userCode: string) {
    try {
      const repo = getRepository(User);
      const user = await repo.findOne(userCode);

      if (!user) {
        throw new Error('Cliente não existe');
      }

      return user;
    } catch (error) {
      return error;
    }
  }
}
