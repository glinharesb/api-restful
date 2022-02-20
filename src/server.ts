import 'reflect-metadata';
import express from 'express';

import './database';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

const PORT = Number(process.env.APP_PORT) || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
