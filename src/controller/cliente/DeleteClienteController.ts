import { Request, Response } from 'express';
import { DeleteClienteService } from '../../services/cliente/DeleteClienteService';

export class DeleteClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteClienteService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.status(204).end();
  }
}
