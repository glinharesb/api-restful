import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { Product } from './products/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'apirestful',
      entities: [User, Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Product]),
  ],
  controllers: [UsersController, ProductsController],
  providers: [UsersService, ProductsService],
})
export class AppModule {}
