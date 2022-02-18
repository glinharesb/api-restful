import { Request, Response } from 'express';
import { CreateClienteService } from '../../services/cliente/CreateClienteService';

export class CreateClienteController {
  async handle(request: Request, response: Response) {
    const { nome, cpf, sexo, email } = request.body;

    const service = new CreateClienteService();
    const result = await service.execute({ nome, cpf, sexo, email });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
