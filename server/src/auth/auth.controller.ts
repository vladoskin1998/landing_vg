import {
  Body,
  Controller,
  Post,
  HttpException,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto, CreateLogouthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() createAuthDto: CreateAuthDto) {
    const { token } = await this.authService.login(createAuthDto);
    if (!token) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return token;
  }

  @Delete('logout')
  async logout(@Body() createLogouthDto: CreateLogouthDto) {
    await this.authService.logout(createLogouthDto);
    return { message: 'LogOut' };
  }
}
