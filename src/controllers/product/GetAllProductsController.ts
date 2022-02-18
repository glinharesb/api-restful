import { Request, Response } from 'express';
import { GetAllProductsService } from '../../services/product/GetAllProductsService';

export class GetAllProductsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllProductsService();
    const clientes = await service.execute();

    return response.json(clientes);
  }
}
