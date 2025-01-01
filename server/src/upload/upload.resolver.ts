import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UploadService } from './upload.service';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as Upload from 'graphql-upload/Upload.js'
import * as path from 'path';
import * as fs from 'fs';

@Resolver()
export class UploadResolver {
  constructor(private readonly uploadService: UploadService) {}

  @Mutation(()=> Boolean) 
  async  uploadFile(@Args({ name: 'file', type: () => [GraphQLUpload] }) file: Upload[]) {
    try {
      await Promise.all(
        file.map(async (item) => {
          const { createReadStream, filename, mimetype } = await item;
  
          if (!createReadStream || !filename || !mimetype) {
            throw new Error('Неверный формат загружаемого файла.');
          }
  
          const dir = mimetype.startsWith('image') ? 'images' : 'others';
          const uploadDir = path.join(__dirname, '..', 'uploads', dir);
          const savePath = path.join(uploadDir, filename);
          const url = `/${dir}/${filename}`;
  
      
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
          }
  
        
          await new Promise<void>((resolve, reject) => {
            const stream = createReadStream();
            const writeStream = fs.createWriteStream(savePath);
  
            stream
              .pipe(writeStream)
              .on('finish', resolve)
              .on('error', (error) => {
                console.error(`Ошибка при сохранении файла ${filename}:`, error);
                reject(error);
              });
          });
  
      
          await this.uploadService.createImage({
            name: filename,
            url,
          });
        }),
      );
  
      return true;
    } catch (error) {
      console.error('Ошибка загрузки файлов:', error);
      return false;
    }
  }
   
  
}
