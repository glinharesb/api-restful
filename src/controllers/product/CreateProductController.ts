import { Request, Response } from 'express';
import { CreateProductService } from '../../services/product/CreateProductService';

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { nome, fabricacao, tamanho, valor } = request.body;

    const service = new CreateProductService();
    const result = await service.execute({ nome, fabricacao, tamanho, valor });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
