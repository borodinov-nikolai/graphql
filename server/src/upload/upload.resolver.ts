import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UploadService } from './upload.service';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import * as Upload from 'graphql-upload/Upload.js'


@Resolver()
export class UploadResolver {
  constructor(private readonly uploadService: UploadService) {}

  @Mutation(()=> Boolean) 
  async  uploadFile(@Args({ name: 'file', type: () => [GraphQLUpload] }) file: Upload[]) {
    file.forEach(async (item)=> console.log(await item))
  
     return true
  }
}
