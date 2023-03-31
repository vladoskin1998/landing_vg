import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPhotosFolder(): string {
    return this.appService.getHello();
  }

  @Get()
  getVideosFolder(): string {
    return this.appService.getHello();
  }

  // @Post()
  // getPhotosList({folderId}): string {
  //   return this.appService.getHello();
  // }

  // @Post()
  // getVideosList({folderId}): string {
  //   return this.appService.getHello();
  // }
}
