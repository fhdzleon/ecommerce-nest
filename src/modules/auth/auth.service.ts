import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthServices {
  getAuth() {
    return 'Retorna Autenticaciones';
  }
}
