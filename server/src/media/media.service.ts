import { Injectable } from '@nestjs/common';
import { Media } from './media.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MediaTypeFile } from '../types/types';
import { FolderProp } from '../types/types';
import * as fs from 'fs';
import * as path from 'path';
import * as ffmpeg from 'fluent-ffmpeg';

ffmpeg.setFfmpegPath(path.join(__dirname, '..', 'node_modules', 'ffmpeg-static', 'bin', 'ffmpeg'));
ffmpeg.setFfprobePath(path.join(__dirname, '..', 'node_modules', 'ffmpeg-static', 'bin', 'ffprobe'));

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media.name) private mediaModel: Model<Media>) {}

  async addFolder({ title, filenames, tag }: FolderProp) {
    console.log(filenames);
    
    await this.mediaModel.create({ title, filenames, tag});
    return;
  }

  async getFolders(tag:MediaTypeFile){
    return await this.mediaModel.find({ tag })
  }


  async poster(filePaths: string[]): Promise<string[]> {
    const thumbnailPromises = filePaths.map((filePath) => {
      const thumbnailPath = path.join(__dirname, '..', 'public', 'thumbnails', `${Date.now()}.jpg`);
  
      return new Promise<string>((resolve, reject) => {
        ffmpeg(filePath)
          .on('end', () => {
            resolve(thumbnailPath);
          })
          .on('error', (error) => {
            reject(error);
          })
          .screenshots({
            count: 1,
            filename: '%b.jpg',
            folder: path.join(__dirname, '..', 'public', 'thumbnails'),
            size: '420x340',
          });
      });
    });
  
    return Promise.all(thumbnailPromises);
  }

  
  
  
      
      

}