import { Request, Response } from 'express';

export class CreateClienteController {
  async handle(request: Request, response: Response) {
    return response.json('CreateClienteController');
  }
}
