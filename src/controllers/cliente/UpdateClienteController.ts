import { Request, Response } from 'express';
import { UpdateClienteService } from '../../services/cliente/UpdateClienteService';

export class UpdateClienteController {
  async handle(request: Request, response: Response) {
    const { codigo_cliente } = request.params;
    const { nome, cpf, sexo, email } = request.body;

    const service = new UpdateClienteService();
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