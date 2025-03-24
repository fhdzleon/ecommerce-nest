import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UserServices {
  constructor(private usersRepository: UsersRepository) {}
  getUsers() {
    return this.usersRepository.getUsers();
  }
}
