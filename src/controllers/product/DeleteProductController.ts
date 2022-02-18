import { Request, Response } from 'express';
import { DeleteProductService } from '../../services/product/DeleteProductService';

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { codigo_produto } = request.params;

    const service = new DeleteProductService();
    const result = await service.execute(codigo_produto);

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.status(204).end();
  }
}
