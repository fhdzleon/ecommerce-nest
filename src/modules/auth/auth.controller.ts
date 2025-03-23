import { Controller, Get } from '@nestjs/common';
import { AuthServices } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthServices) {}

  @Get()
  getAut() {
    return this.authService.getAuth();
  }
}
