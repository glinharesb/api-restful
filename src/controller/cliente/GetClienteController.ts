import { Request, Response } from 'express';
import { GetClienteService } from '../../services/cliente/GetClienteService';

export class GetClienteController {
  async handle(request: Request, response: Response) {
    const { codigo_cliente } = request.params;

    const service = new GetClienteService();
    const result = await service.execute(codigo_cliente);

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
