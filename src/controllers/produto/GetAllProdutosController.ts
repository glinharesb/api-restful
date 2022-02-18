import { Request, Response } from 'express';
import { GetAllProdutosService } from '../../services/produto/GetAllProdutosService';

export class GetallProdutosController {
  async handle(request: Request, response: Response) {
    const service = new GetAllProdutosService();
    const clientes = await service.execute();

    return response.json(clientes);
  }
}
