import { IsNotEmpty, IsNumber, IsString, Validate } from 'class-validator';
import { ManufacturingValidation } from '../helpers/ManufacturingValidation';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @Validate(ManufacturingValidation)
  fabricacao: string;

  @IsNotEmpty()
  @IsString()
  tamanho: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}
