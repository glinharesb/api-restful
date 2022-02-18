import { Router } from 'express';

import { GetAllUsersController } from './controllers/user/GetAllUsersController';
import { GetUserController } from './controllers/user/GetUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';

import { GetAllProductsController } from './controllers/product/GetAllProductsController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';

const routes = Router();

routes.get('/clientes', new GetAllUsersController().handle);
routes.get('/clientes/:codigo_cliente', new GetUserController().handle);
routes.post('/clientes', new CreateUserController().handle);
routes.put('/clientes/:codigo_cliente', new UpdateUserController().handle);
routes.delete('/clientes/:codigo_cliente', new DeleteUserController().handle);

routes.get('/produtos', new GetAllProductsController().handle);
routes.post('/produtos', new CreateProductController().handle);
routes.delete(
  '/produtos/:codigo_produto',
  new DeleteProductController().handle
);

export { routes };
