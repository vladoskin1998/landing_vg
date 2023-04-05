import {
  Controller,
  Post,
  UploadedFiles,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('admin')
export class MediaController {

  @Post('folder-photo')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadedFile(@UploadedFiles() file) {
    // const response = {
    // 	originalname: file.originalname,
    // 	filename: file.filename,
    // };
    console.log(file);
    
    return 0;
}

  //URL запроса: http://localhost:5001/admin/folder/photo

  @Post('folder/video')
  async addFolderVideo() {}

  @Post()
  async addItem() {}

  @Post()
  async deleteFolder() {}

  @Post()
  async deleteItem() {}
}

//http://localhost:5001/admin/folder/photo
