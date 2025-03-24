import { Module } from '@nestjs/common';
import { ProductServices } from './products.service';
import { ProductController } from './products.controller';
import { ProductsRepository } from './products.repository';

@Module({
  providers: [ProductServices, ProductsRepository],
  controllers: [ProductController],
})
export class ProductsModule {}
