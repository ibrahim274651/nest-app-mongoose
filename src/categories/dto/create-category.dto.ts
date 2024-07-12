import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Category name must be a non-empty string' })
  name: string;
}
