import { Router } from 'express';

import { GetAllUsersController } from './controllers/user/GetAllUsersController';
import { GetUserController } from './controllers/user/GetUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';

import { GetAllProductsController } from './controllers/product/GetAllProductsController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { DeleteProductController } from './controllers/product/DeleteProductController';
import { GetProductController } from './controllers/product/GetProductController';
import { UpdateProductController } from './controllers/product/UpdateProductController';

const routes = Router();

routes.get('/clientes', new GetAllUsersController().handle);
routes.get('/clientes/:id', new GetUserController().handle);
routes.post('/clientes', new CreateUserController().handle);
routes.put('/clientes/:id', new UpdateUserController().handle);
routes.delete('/clientes/:id', new DeleteUserController().handle);

routes.get('/produtos', new GetAllProductsController().handle);
routes.get('/produtos/:id', new GetProductController().handle);
routes.post('/produtos', new CreateProductController().handle);
routes.put('/produtos/:id', new UpdateProductController().handle);
routes.delete('/produtos/:id', new DeleteProductController().handle);

export { routes };
