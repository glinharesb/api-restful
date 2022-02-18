import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/UpdateUserService';

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const codigo_cliente = request.params.id;
    const { nome, cpf, sexo, email } = request.body;

    const service = new UpdateUserService();
    const result = await service.execute({
      codigo_cliente,
      nome,
      cpf,
      sexo,
      email,
    });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
