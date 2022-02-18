import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

export class GetAllUsersService {
  async execute() {
    try {
      const repo = getRepository(User);
      const users = await repo.find();

      return users;
    } catch (error) {
      return error;
    }
  }
}
