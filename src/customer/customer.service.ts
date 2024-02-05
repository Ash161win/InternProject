import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CustomerService {
  private readonly filePath: string;
  private customers: any[];

  constructor() {
    this.filePath = path.resolve(__dirname, '..','..','..', 'my-mui-app', 'public', 'companies.json');
    
    this.customers = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
  }

  
  findAll(): any[] {
    return this.customers;
  }

  
  findById(id: string): any {
    return this.customers.find(customer => customer.id === id);
  }

  
  update(id: string, updatedData: any): void {
    const index = this.customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
      
      this.customers[index] = { ...this.customers[index], ...updatedData };
      
      
      fs.writeFileSync(this.filePath, JSON.stringify(this.customers, null, 2));
    }
  }
}
