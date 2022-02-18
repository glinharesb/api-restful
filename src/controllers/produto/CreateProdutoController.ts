import { Request, Response } from 'express';
import { CreateProdutoService } from '../../services/produto/CreateProdutoService';

export class CreateProdutoController {
  async handle(request: Request, response: Response) {
    const { nome, fabricacao, tamanho, valor } = request.body;

    const service = new CreateProdutoService();
    const result = await service.execute({ nome, fabricacao, tamanho, valor });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
