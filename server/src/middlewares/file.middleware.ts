import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as multer from 'multer';

@Injectable()
export class FileMiddleware implements NestMiddleware {
  private upload = multer({ dest: 'public/' }); 

  use(req: Request, res: Response, next: NextFunction) {
    this.upload.array('files')(req, res, next);
  }
}