import 'reflect-metadata';
import express from 'express';

import { connectToDatabase } from './database';
import { routes } from './routes';
import { handleBodyError } from './helpers/handleBodyError';

async function bootstrap() {
  const connection = await connectToDatabase();
  if (!connection) return;

  const app = express();
  app.use(express.json());
  app.use(routes);
  app.use(handleBodyError);

  const PORT = Number(process.env.APP_PORT) || 3000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`~> Server listening on: http://localhost:${PORT}`);
  });
}

bootstrap();
