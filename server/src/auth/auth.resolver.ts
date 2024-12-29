import { Args, Context, Field, Mutation, ObjectType, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignUpInput } from './dto/signUp.unput';
import { Auth } from './entities/auth.entity';
import { Response } from 'express';


@ObjectType()
class SignUpResponse {
  @Field()
  jwt: string;
}

@Resolver(()=> Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(()=> SignUpResponse) 
   async signUp(@Args('signUpInput') signUpInput: SignUpInput, @Context('res') res: Response): Promise<SignUpResponse> {
      const {accessToken, refreshToken} = await this.authService.signUp(signUpInput)
      res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000})
      return {jwt: accessToken}
    }
  
}
