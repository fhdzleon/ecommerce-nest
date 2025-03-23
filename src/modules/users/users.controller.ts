import { Controller, Get } from '@nestjs/common';
import { UserServices } from './users.service';

@Controller('users')
export class UsersConttroller {
  constructor(private readonly usersService: UserServices) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}
