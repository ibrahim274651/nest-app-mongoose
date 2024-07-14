import { CreateProfileDto } from './../../../profile/dto/create-profile.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  profile: CreateProfileDto;

  // @IsOptional()
  // @ValidateNested()
  // profile?: CreateProfileDto;
}
