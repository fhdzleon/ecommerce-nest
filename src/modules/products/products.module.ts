import { Module } from '@nestjs/common';
import { ProductServices } from './products.service';
import { ProductController } from './products.controller';

@Module({
  providers: [ProductServices],
  controllers: [ProductController],
})
export class ProductsModule {}
