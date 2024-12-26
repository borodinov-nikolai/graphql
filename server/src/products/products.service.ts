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

  async findAll(params: {sort: 'asc' | 'desc'}) {
    const {sort} = params || {}
    return await this.db.product.findMany({
       orderBy: {
        price: sort
       }
    });
  }

  async findOne(id: number) {
    return await this.db.product.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateProductInput: UpdateProductInput) {
    return await this.db.product.update({
      where: {
        id
      },
      data: updateProductInput
    })
  }

  async remove(id: number) {
    return await this.db.product.delete({
      where: {
        id
      }
    })
  }
}
