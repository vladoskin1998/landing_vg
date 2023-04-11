import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  UseGuards,
  Get,
} from '@nestjs/common';
import {
  FilesInterceptor,
  FileInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { MediaService } from './media.service';
import { MediaTypeFile, MediaEnumFile } from '../types/types';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('get-folders')
  async getFolders(@Body() { tag }: { tag: MediaTypeFile }) {
    return await this.mediaService.getFolders(tag);
  }

  @UseGuards(JwtAuthGuard)
  @Post('add-folder')
  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: 'bgfiles',
        maxCount: 1,
      },
      {
        name: 'files',
        maxCount: 10,
      },
    ]),
  )
  async addFolder(@UploadedFiles() binary, @Body() body) {
    const { title, tag }: { title: string; tag: MediaTypeFile } = body;
    const filenames: string[] = binary.files.map((file) => file.filename);
    const bgfiles = binary.bgfiles[0].filename;
  
    await this.mediaService.addFolder({
      title,
      filenames,
      tag,
      bgfiles,
    });

    return { message: 'Файл загружен' };
  }

  @UseGuards(JwtAuthGuard)
  @Post('delete-folder')
  async deleteFolder(@Body() { id }: { id: string }) {
    return await this.mediaService.deleteFolder(id);
  }
}
