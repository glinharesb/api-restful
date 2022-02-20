import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

export class DeleteUserService {
  async execute(userCode: string) {
    try {
      const repo = getRepository(User);

      const user = await repo.findOne(userCode);
      if (!user) {
        throw new Error('user does not exists');
      }

      await repo.delete(userCode);

      return user;
    } catch (error) {
      return error;
    }
  }
}
