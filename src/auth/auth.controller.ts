import { Controller, Body, Post, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService, jwtRes } from './auth.service';
import { UserLoginDto, UserRegisterDto } from 'src/users/users.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @Post('login')
  async signIn(
    @Res({ passthrough: true }) res: Response,
    @Body() signInDto: UserLoginDto,
  ): Promise<boolean> {
    const loginRes: jwtRes = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );

    res.cookie('token', loginRes.access_token, {
      httpOnly: true,
      // secure: true
    });
    return true;
  }

  @Post('logout')
  signout(@Res({ passthrough: true }) res: Response): void {
    res.clearCookie('token');
  }

  @Post('verifyToken')
  async verifyToken(@Req() req: Request): Promise<boolean> {
    const res = await this.authService.verifyToken(req.cookies['token']);
    return res;
  }

  @Post('register')
  register(@Body() registerDto: UserRegisterDto): Promise<UserRegisterDto> {
    return this.userService.createUser(registerDto);
  }
}
