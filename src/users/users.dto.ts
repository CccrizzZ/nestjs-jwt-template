import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class UserRegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  password: string;
}

export class UserDto extends UserRegisterDto {
  @IsNotEmpty()
  id: string;
}
