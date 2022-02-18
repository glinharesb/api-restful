import { Request, Response } from 'express';
import { GetAllClientesService } from '../../services/cliente/GetAllClientesService';

export class GetAllClientesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllClientesService();
    const clientes = await service.execute();

    return response.json(clientes);
  }
}
