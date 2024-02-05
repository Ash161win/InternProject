import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async loginUser(@Body() { username, password }: { username: string; password: string }): Promise<{ username: string }> {
    const isAuthenticated = await this.loginService.authenticate(username, password);

    if (isAuthenticated) {
      return { username };
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
