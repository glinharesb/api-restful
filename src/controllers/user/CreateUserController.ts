import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { nome, cpf, sexo, email } = request.body;

    const service = new CreateUserService();
    const result = await service.execute({ nome, cpf, sexo, email });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
