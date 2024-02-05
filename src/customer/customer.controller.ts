import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.customerService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedData: any) {
    return this.customerService.update(id, updatedData);
  }
}