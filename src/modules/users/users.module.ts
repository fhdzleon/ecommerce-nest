import { Module } from '@nestjs/common';
import { UserServices } from './users.service';
import { UsersConttroller } from './users.controller';

@Module({
  providers: [UserServices],
  controllers: [UsersConttroller],
})
export class UsersModule {}
