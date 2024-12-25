import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DbService){}

  async create(createProductInput: CreateProductInput) {
    return await this.db.product.create({
      data: createProductInput
    })
  }

  async findAll() {
    return await this.db.product.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
