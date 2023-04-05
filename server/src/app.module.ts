import { Module,MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FileMiddleware } from './middlewares/file.middleware';
import { MediaController } from './media/media.controller';
import { MediaModule } from './media/media.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI'),
        dbName: 'vg',
      }),
    }),
    MediaModule,
  ],
  controllers: [AppController, MediaController ],
  providers: [AppService ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FileMiddleware).forRoutes('*');
  }
}
