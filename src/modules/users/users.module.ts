import { Module } from '@nestjs/common';
import { UserServices } from './users.service';
import { UsersConttroller } from './users.controller';
import { UsersRepository } from './users.repository';

@Module({
  providers: [UserServices, UsersRepository],
  controllers: [UsersConttroller],
})
export class UsersModule {}
