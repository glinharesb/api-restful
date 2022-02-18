import { Request, Response } from 'express';
import { DeleteUserService } from '../../services/user/DeleteUserService';

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const userCode = request.params.id;

    const service = new DeleteUserService();
    const result = await service.execute(userCode);

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.status(204).end();
  }
}
