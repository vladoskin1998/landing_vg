import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './auth.schema';
import { CreateAuthDto, CreateLogouthDto } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private authModel: Model<Auth>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
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

    const token = await this.jwtService.signAsync(
      { login },
      { secret: this.configService.get('JWT_SECRET') ,expiresIn: '1d' },
    );

    await user.updateOne({ token, lastEntered: new Date() });

    return { token };
  }

  async findUserByToken(token:string){
    return await this.authModel.findOne({token})
  }

  async logout(createLogouthDto: CreateLogouthDto): Promise<void> {
    console.log('lloog');

    await this.authModel.findOneAndUpdate(createLogouthDto, { token: '' });
    return;
  }
}
