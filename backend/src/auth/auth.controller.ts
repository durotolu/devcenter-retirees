import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() userData: any) {
    userData.password = await this.authService.hashPassword(userData.password);
    return this.userService.create(userData);
  }

  @Post('login')
  async login(@Body() { email, password }: any) {
    const user = await this.userService.findByEmail(email);
    if (user && await this.authService.comparePasswords(password, user.password)) {
      return { token: await this.authService.generateToken({ id: user.id, email: user.email }) };
    }
    throw new Error('Invalid credentials');
  }
}
