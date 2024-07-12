import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Product name must be a non-empty string' })
  name: string;
  @IsNotEmpty({ message: 'Product price must be a non-empty price' })
  price: number;
}
