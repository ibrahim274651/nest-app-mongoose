import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fname: string;
  @IsNotEmpty()
  @IsString()
  lname: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNumber()
  @IsOptional()
  age?: number;
}
