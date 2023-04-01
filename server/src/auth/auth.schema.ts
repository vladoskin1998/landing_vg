import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthType = HydratedDocument<Auth>;

@Schema()
export class Auth {
  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop()
  token: string;

  @Prop()
  lastEntered: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
