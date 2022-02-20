/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Param,
  Res,
  HttpStatus,
  HttpException,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Controller('produtos')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(
    @Body() createUserDto: CreateProductDto
  ): Promise<Product | Error> {
    const result = await this.productsService.create(createUserDto);

    if (result instanceof Error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: [result.message],
          error: 'Bad Request',
        },
        HttpStatus.FORBIDDEN
      );
    }

    return result;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() createProductDto: CreateProductDto
  ): Promise<Product | Error> {
    const result = await this.productsService.update({
      codigo_produto: id,
      ...createProductDto,
    });

    if (result instanceof Error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: [result.message],
          error: 'Bad Request',
        },
        HttpStatus.FORBIDDEN
      );
    }

    return result;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result = await this.productsService.remove(id);

    if (result instanceof Error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: [result.message],
          error: 'Bad Request',
        },
        HttpStatus.FORBIDDEN
      );
    }

    return res.status(HttpStatus.NO_CONTENT).end();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result = await this.productsService.findOne(id);

    if (result instanceof Error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: [result.message],
          error: 'Bad Request',
        },
        HttpStatus.FORBIDDEN
      );
    }

    res.status(HttpStatus.OK).json(result);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const result = await this.productsService.findAll();

    if (result instanceof Error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: [result.message],
          error: 'Bad Request',
        },
        HttpStatus.FORBIDDEN
      );
    }

    res.status(HttpStatus.OK).json(result);
  }
}
