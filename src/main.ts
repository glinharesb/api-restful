import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = Number(process.env.APP_PORT) || 3000;
  await app.listen(PORT, '0.0.0.0');
}

bootstrap();
