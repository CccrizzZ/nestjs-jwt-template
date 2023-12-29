import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/client';
import { UserDto, UserRegisterDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor() {}

  async findUser(id: string): Promise<UserDto | undefined> {
    const res = prisma.user.findFirst({ where: { id: id } });
    return res;
  }

  async login(email: string, password: string): Promise<UserDto | undefined> {
    const res = prisma.user.findFirst({
      where: { email: email, password: password },
    });
    return res;
  }

  async createUser(user: UserRegisterDto): Promise<UserDto | undefined> {
    const res = prisma.user.create({ data: user });
    return res;
  }
}
