import { Request, Response } from 'express';

export class GetAllClientesController {
  async handle(request: Request, response: Response) {
    return response.json('GetAllClientesController');
  }
}
