import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UploadService {
    constructor(private readonly db: DbService) {}
    async createImage(data: {name: string, url: string}) {
     await this.db.image.create({
        data
     })
    }
}
