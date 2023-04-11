import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MongooseModule } from '@nestjs/mongoose';
import { Media, MediaSchema } from './media.schema';
import { v4 as uuidv4 } from 'uuid';
import * as mime from 'mime-types';
import { JwtAuthGuard } from '../auth/auth.guard';
import { AuthModule } from '../auth/auth.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Media.name, schema: MediaSchema }]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads/',
        filename: (req, file, cb) => {
          const uniqueSuffix = uuidv4();
          const ext = mime.extension(file.mimetype);
          cb(null, uniqueSuffix + '.' + ext);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|mp4)$/)) {
          return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
    }),
    AuthModule,
 
  ],
  controllers: [MediaController],
  providers: [MediaService,JwtAuthGuard],
})
export class MediaModule {}
