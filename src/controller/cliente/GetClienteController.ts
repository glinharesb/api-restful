import { Request, Response } from 'express';

export class GetClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    return response.json('GetClienteController');
  }
}
