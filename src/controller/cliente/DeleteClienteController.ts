import { Request, Response } from 'express';

export class DeleteClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    return response.json('DeleteClienteController');
  }
}
