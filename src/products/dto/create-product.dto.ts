import { Type } from 'class-transformer';
import { CreateCategoryDto } from './../../categories/dto/create-category.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  // @ValidateNested()
  // @Type(() => CreateCategoryDto)
  // category: CreateCategoryDto;

  @IsNotEmpty()
  categoryId: string;
}
