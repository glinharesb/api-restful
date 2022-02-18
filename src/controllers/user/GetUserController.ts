import { Request, Response } from 'express';
import { GetUserService } from '../../services/user/GetUserService';

export class GetUserController {
  async handle(request: Request, response: Response) {
    const { codigo_cliente } = request.params;

    const service = new GetUserService();
    const result = await service.execute(codigo_cliente);

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
