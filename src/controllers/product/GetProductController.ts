import { Request, Response } from 'express';
import { GetProductService } from '../../services/product/GetProductService';

export class GetProductController {
  async handle(request: Request, response: Response) {
    const { codigo_produto } = request.params;

    const service = new GetProductService();
    const result = await service.execute(codigo_produto);

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
