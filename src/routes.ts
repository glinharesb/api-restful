import { Router } from 'express';

import { GetAllClientesController } from './controllers/cliente/GetAllClientesController';
import { GetClienteController } from './controllers/cliente/GetClienteController';
import { CreateClienteController } from './controllers/cliente/CreateClienteController';
import { UpdateClienteController } from './controllers/cliente/UpdateClienteController';
import { DeleteClienteController } from './controllers/cliente/DeleteClienteController';

import { GetallProdutosController } from './controllers/produto/GetAllProdutosController';
import { CreateProdutoController } from './controllers/produto/CreateProdutoController';

const routes = Router();

routes.get('/clientes', new GetAllClientesController().handle);
routes.get('/clientes/:codigo_cliente', new GetClienteController().handle);
routes.post('/clientes', new CreateClienteController().handle);
routes.put('/clientes/:codigo_cliente', new UpdateClienteController().handle);
routes.delete(
  '/clientes/:codigo_cliente',
  new DeleteClienteController().handle
);

routes.get('/produtos', new GetallProdutosController().handle);
routes.post('/produtos', new CreateProdutoController().handle);

export { routes };
