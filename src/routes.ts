import { Router } from 'express';

import { GetAllClientesController } from './controller/cliente/GetAllClientesController';
import { GetClienteController } from './controller/cliente/GetClienteController';
import { CreateClienteController } from './controller/cliente/CreateClienteController';
import { UpdateClienteController } from './controller/cliente/UpdateClienteController';
import { DeleteClienteController } from './controller/cliente/DeleteClienteController';

const routes = Router();

routes.get('/clientes', new GetAllClientesController().handle);
routes.get('/clientes/:id', new GetClienteController().handle);
routes.post('/clientes', new CreateClienteController().handle);
routes.put('/clientes/:id', new UpdateClienteController().handle);
routes.delete('/clientes/:id', new DeleteClienteController().handle);

export { routes };
