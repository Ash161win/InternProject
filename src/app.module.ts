import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerController } from './customer/customer.controller';

@Module({
  imports: [LoginModule, CustomerModule],
  controllers: [CustomerController],
  providers: [],
})
export class AppModule {}
