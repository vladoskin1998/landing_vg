import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Get
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
import { MediaService } from './media.service';
import { MediaTypeFile, MediaEnumFile } from '../types/types';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('add-folder')
  @UseInterceptors(FilesInterceptor('files'))
  async addFolder(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body,
  ) {
    const { title, tag }:{title:string, tag: MediaTypeFile } = body;

    const filenames:string[] = files.map(file => file.filename);
    const filepath =  files.map(file => file.path);

    await this.mediaService.addFolder({ title, filenames, tag });
 
    
    // if(tag === MediaEnumFile.VIDEO){
    //   await this.mediaService.poster(filepath);
    // }

    return { message: 'Файл загружен' };
  }


  @Post('get-folders')
  async getFolders(@Body() {tag}: {tag:MediaTypeFile}){
    return await this.mediaService.getFolders(tag)
  }


  @Post()
  async addItem() {}

  @Post()
  async deleteFolder() {}

  @Post()
  async deleteItem() {}
}

//http://localhost:5001/admin/folder/photo
