import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  @Field()
  login: String
  @Field()
  email: String
  @Field()
  password: String
}