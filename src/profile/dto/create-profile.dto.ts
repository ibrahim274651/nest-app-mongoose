import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProfileDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lname: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  bio?: string;

  @ApiProperty({ description: 'Ibrahim age', minimum: 1, default: 20 })
  @IsOptional()
  @IsNotEmpty()
  age?: number;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  image?: string;
}
