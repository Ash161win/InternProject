import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {

  async authenticate(username: string, password: string): Promise<boolean> {
    // Simulate asynchronous operation (e.g., querying a database)
    // Replace this with your actual authentication logic
    return new Promise((resolve) => {
      if (username === 'admin' && password === 'admin') {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
}
