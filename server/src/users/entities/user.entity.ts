import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: number;
  @Field()
  login: string;
  @Field()
  email: string;
}
