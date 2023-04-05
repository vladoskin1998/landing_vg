import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'https://yourdomain.com'],
    methods: 'GET,POST,DELETE',
    // preflightContinue: false,
    // optionsSuccessStatus: 204,
    // credentials: true,
  });
  app.useStaticAssets(join(__dirname, '..', 'view'));
  await app.listen(5001);
}
bootstrap();
