import { Controller, Get } from '@nestjs/common';
import { ProductServices } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productServices: ProductServices) {}

  @Get()
  getProducts() {
    return this.productServices.getProducts();
  }
}
