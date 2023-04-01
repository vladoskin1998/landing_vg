import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './auth.schema';
import { CreateAuthDto, CreateLogouthDto } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private authModel: Model<Auth>,
    private readonly jwtService: JwtService,
  ) {}

  async login(createAuthDto: CreateAuthDto): Promise<{ token: string }> {
    const { login, password } = createAuthDto;

    const user = await this.authModel.findOne({ login });

    if (!user) {
      throw new HttpException('Incorrect login', HttpStatus.NOT_FOUND);
    }

    const isAuth = await bcrypt.compare(password, user.password);

    if (!isAuth) {
      throw new HttpException('Incorrect password', HttpStatus.NOT_FOUND);
    }

    const token = await this.jwtService.signAsync({ login });

    user.set({ token });
    await user.save();

    return { token };
  }

  async logout(createLogouthDto: CreateLogouthDto): Promise<void> {
    await this.authModel.findOneAndDelete(createLogouthDto);
    return;
  }
}
