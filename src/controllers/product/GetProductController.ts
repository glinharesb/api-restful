import { Request, Response } from 'express';
import { GetProductService } from '../../services/product/GetProductService';

export class GetProductController {
  async handle(request: Request, response: Response) {
    const productCode = request.params.id;

    const service = new GetProductService();
    const result = await service.execute(productCode);

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
