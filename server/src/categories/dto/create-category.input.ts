import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  login: string
  email: string
  password: string
}
