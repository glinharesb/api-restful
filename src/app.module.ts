import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { Product } from './products/product.entity';
import { getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          entities: [User, Product],
          migrations: ['.src/database/migrations/*.ts'],
        }),
    }),
    TypeOrmModule.forFeature([User, Product]),
  ],
  controllers: [UsersController, ProductsController],
  providers: [UsersService, ProductsService],
})
export class AppModule {}
