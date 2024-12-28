import { InputType, Int, Field } from '@nestjs/graphql';


@InputType()
export class SignUpInput {
  @Field()
  login: string
  @Field()
  email: string
  @Field()
  password: string
}