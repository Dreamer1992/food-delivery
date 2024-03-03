import { LoginDto, RegisterDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    // private readonly prisma:
    private readonly configService: ConfigService,
  ) {}

  // register user service
  async register(registerDto: RegisterDto) {
    const user = { ...registerDto };
    return user;
  }

  // login service
  async Login(loginDto: LoginDto) {
    const user = { ...loginDto };
    return user;
  }

  // get all users service
  async getUsers() {
    const users = [
      {
        id: '1',
        name: 'user1',
        email: '1@1.com',
        password: '123456',
      },
      {
        id: '2',
        name: 'user2',
        email: '2@2.com',
        password: '1234567',
      },
      {
        id: '3',
        name: 'user3',
        email: '3@3.com',
        password: '12345678',
      },
    ];
    return users;
  }
}
