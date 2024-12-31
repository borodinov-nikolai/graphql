import { ArgsType, Field, registerEnumType} from "@nestjs/graphql";



export enum Sort {
  asc = 'asc',
  desc = 'desc',
}

registerEnumType(Sort, {
  name: 'sort', 
});

@ArgsType()
export class GetProductsArgs {
  @Field(()=> Sort)
  sort?: Sort
}