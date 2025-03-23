import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductServices {
  getProducts() {
    return 'Retornando productos';
  }
}
