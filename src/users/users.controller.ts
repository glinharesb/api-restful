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
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('clientes')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User | Error> {
    const result = await this.usersService.create(createUserDto);

    if (result instanceof Error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Cliente já existe',
        },
        HttpStatus.FORBIDDEN
      );
    }

    return result;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() createUserDto: CreateUserDto
  ): Promise<User | Error> {
    const result = await this.usersService.update({
      codigo_cliente: id,
      ...createUserDto,
    });

    if (result instanceof Error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: result.message,
        },
        HttpStatus.FORBIDDEN
      );
    }

    return result;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const result = await this.usersService.remove(id);

    if (result instanceof Error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: result.message,
        },
        HttpStatus.FORBIDDEN
      );
    }

    return res.status(HttpStatus.NO_CONTENT).end();
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Cliente não existe',
        },
        HttpStatus.FORBIDDEN
      );
    }

    res.status(HttpStatus.OK).json(user);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const users = await this.usersService.findAll();

    res.status(HttpStatus.OK).json(users);
  }
}
