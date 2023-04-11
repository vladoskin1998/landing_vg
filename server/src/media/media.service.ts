import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Media } from './media.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MediaTypeFile } from '../types/types';
import { FolderProp } from '../types/types';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class MediaService {
  constructor(@InjectModel(Media.name) private mediaModel: Model<Media>) {}

  async addFolder({ title, filenames, tag, bgfiles }: FolderProp) {
    
    return await this.mediaModel.create({ title, filenames, tag, bgfiles });
  }

  
  async getFolders(tag: MediaTypeFile) {
    return await this.mediaModel.find({ tag });
  }

  async deleteFolder(id: string) {
    const { filenames, bgfiles } = await this.mediaModel.findOneAndDelete({ _id: id });
    await this.deleteFiles([...filenames, bgfiles]);
    return { message: 'Folder is deleted' };
  }

  async deleteFiles(arr: string[]): Promise<void> {
    const uploadsPath = path.join(__dirname, '../../uploads'); // путь к папке uploads

    for (const filename of arr) {
      const filePath = path.join(uploadsPath, filename);
      if (fs.existsSync(filePath)) {
        try {
          await fs.promises.unlink(filePath);
          console.log(`File ${filename} deleted successfully.`);
        } catch (err) {
          console.error(`Failed to delete file ${filename}: ${err}`);
        }
      } else {
        throw new HttpException('not found file', HttpStatus.NOT_FOUND);
      }
    }
  }
}
