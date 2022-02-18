import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/product/UpdateProductService';

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const codigo_produto = request.params.id;
    const { nome, fabricacao, tamanho, valor } = request.body;

    const service = new UpdateProductService();
    const result = await service.execute({
      codigo_produto,
      nome,
      fabricacao,
      tamanho,
      valor,
    });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
