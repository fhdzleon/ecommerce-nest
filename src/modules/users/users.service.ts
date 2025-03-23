import { Injectable } from '@nestjs/common';

@Injectable()
export class UserServices {
  getUsers() {
    return 'Regresando los usuarios';
  }
}
