import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductServices {
  constructor(private productsRepository: ProductsRepository) {}

  getProducts() {
    return this.productsRepository.getProducts();
  }
}
