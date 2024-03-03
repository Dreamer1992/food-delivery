import { BadRequestException } from '@nestjs/common';
import { RegisterDto } from './dto/user.dto';
import { RegisterRepose } from './types/user.types';
import { UsersService } from './users.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver('User')
// @UseFilters
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Mutation(() => RegisterRepose)
  async register(
    @Args('registerInput') registerDto: RegisterDto,
  ): Promise<RegisterRepose> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill the all fields');
    }

    const user = await this.userService.register(registerDto);
    return { user };
  }

  @Query(() => [User])
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }
}
