import { Controller, Post } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Controller('media')
export class MediaController {
    @Post()
    async addFolder(){}

    @Post()
    async addItem(){}

    @Post()
    async deleteFolder(){}

    @Post()
    async deleteItem(){}
}
