import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [AuthModule, ProductsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
