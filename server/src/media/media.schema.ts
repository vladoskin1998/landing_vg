import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { MediaTypeFile } from '../types/types';

export type MediaType = HydratedDocument<Media>;

@Schema()
export class Media {
  @Prop({ unique: true, required: true })
  title: string;

  @Prop()
  filenames: string[];

  @Prop()
  tag: MediaTypeFile;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
