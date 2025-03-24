import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  private users = [
    {
      id: 1,
      email: 'juan.perez@example.com',
      name: 'Juan Pérez',
      password: 'securePass123',
      address: 'Calle 123, Ciudad de México',
      phone: '+52 555 123 4567',
      country: 'México',
      city: 'Ciudad de México',
    },
    {
      id: 2,
      email: 'maria.garcia@example.com',
      name: 'María García',
      password: 'mySafePass456',
      address: 'Av. Siempre Viva 742, Buenos Aires',
      phone: '+54 9 11 9876 5432',
      country: 'Argentina',
      city: 'Buenos Aires',
    },
    {
      id: 3,
      email: 'carlos.lopez@example.com',
      name: 'Carlos López',
      password: 'strongPass789',
      address: 'Rua das Flores, 50, São Paulo',
      phone: '+55 11 91234 5678',
      country: 'Brasil',
      city: 'São Paulo',
    },
  ];
  getUsers() {
    return this.users;
  }
}
