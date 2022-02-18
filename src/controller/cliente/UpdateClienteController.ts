import { Request, Response } from 'express';

export class UpdateClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    return response.json('UpdateClienteController');
  }
}
